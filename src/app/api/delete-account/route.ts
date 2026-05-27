import { NextRequest, NextResponse } from "next/server";

interface DeleteAccountRequestBody {
  phone: string;
  otp: string;
  reason?: string;
}

interface DeleteAccountResponse {
  success: boolean;
  message: string;
}

interface VerifyOtpBackendResponse {
  success: boolean;
  message: string;
  token?: string;
}

function parseBody(raw: unknown): DeleteAccountRequestBody | null {
  if (typeof raw !== "object" || raw === null) return null;
  const obj = raw as Record<string, unknown>;
  if (typeof obj.phone !== "string" || typeof obj.otp !== "string") return null;
  return {
    phone: obj.phone,
    otp: obj.otp,
    ...(typeof obj.reason === "string" && obj.reason ? { reason: obj.reason } : {}),
  };
}

export async function POST(
  request: NextRequest
): Promise<NextResponse<DeleteAccountResponse>> {
  let raw: unknown;
  try {
    raw = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request body." },
      { status: 400 }
    );
  }

  const body = parseBody(raw);
  if (!body) {
    return NextResponse.json(
      { success: false, message: "Missing required fields: phone and otp." },
      { status: 400 }
    );
  }

  const { otp, reason } = body;
  const phone = body.phone.replace(/\D/g, "");

  if (phone.length !== 10) {
    return NextResponse.json(
      { success: false, message: "Invalid phone number." },
      { status: 400 }
    );
  }
  if (!/^\d{6}$/.test(otp)) {
    return NextResponse.json(
      { success: false, message: "OTP must be 6 digits." },
      { status: 400 }
    );
  }

  const baseUrl = process.env.BACKEND_BASE_URL;
  if (!baseUrl) {
    console.error("[delete-account] BACKEND_BASE_URL is not set.");
    return NextResponse.json(
      { success: false, message: "Service temporarily unavailable. Please contact support." },
      { status: 503 }
    );
  }

  // Step 1: Verify OTP → obtain auth token
  let token: string;
  try {
    console.log(`[delete-account] → POST ${baseUrl}/api/auth/doctor-verify-otp`, { phone });

    const verifyRes = await fetch(`${baseUrl}/api/auth/doctor-verify-otp`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone, otp }),
    });

    const verifyData = (await verifyRes.json()) as VerifyOtpBackendResponse;

    console.log(`[delete-account] ← verify-otp ${verifyRes.status}`, { success: verifyData.success, message: verifyData.message, hasToken: !!verifyData.token });

    if (!verifyRes.ok || !verifyData.token) {
      return NextResponse.json(
        {
          success: false,
          message: verifyData.message ?? "Invalid OTP. Please try again.",
        },
        { status: verifyRes.status >= 500 ? 502 : verifyRes.status }
      );
    }

    token = verifyData.token;
  } catch (err) {
    console.error("[delete-account] OTP verification failed:", err);
    return NextResponse.json(
      { success: false, message: "Network error during OTP verification. Please try again." },
      { status: 502 }
    );
  }

  // Step 2: Delete account using the verified auth token
  try {
    console.log(`[delete-account] → DELETE ${baseUrl}/api/doctor/account`);

    const deleteRes = await fetch(`${baseUrl}/api/doctor/account`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ reason: reason ?? "" }),
    });

    console.log(`[delete-account] ← delete-account ${deleteRes.status}`);

    if (!deleteRes.ok) {
      let message = "Failed to delete account. Please try again.";
      try {
        const errBody = (await deleteRes.json()) as { message?: string };
        if (errBody.message) message = errBody.message;
      } catch {
        // ignore parse error, use default message
      }
      return NextResponse.json(
        { success: false, message },
        { status: deleteRes.status >= 500 ? 502 : deleteRes.status }
      );
    }

    return NextResponse.json({
      success: true,
      message:
        "Your account deletion request has been received and will be processed within 7 business days.",
    });
  } catch (err) {
    console.error("[delete-account] Account deletion request failed:", err);
    return NextResponse.json(
      { success: false, message: "Network error during account deletion. Please try again." },
      { status: 502 }
    );
  }
}
