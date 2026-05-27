import { NextRequest, NextResponse } from "next/server";

interface SendOtpResponse {
  success: boolean;
  message: string;
  mode?: string;
}

export async function POST(
  request: NextRequest
): Promise<NextResponse<SendOtpResponse>> {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request body." },
      { status: 400 }
    );
  }

  if (
    typeof body !== "object" ||
    body === null ||
    typeof (body as Record<string, unknown>).phone !== "string"
  ) {
    return NextResponse.json(
      { success: false, message: "Phone number is required." },
      { status: 400 }
    );
  }

  const digits = ((body as Record<string, unknown>).phone as string).replace(/\D/g, "");
  if (digits.length !== 10) {
    return NextResponse.json(
      { success: false, message: "Enter a valid 10-digit mobile number." },
      { status: 400 }
    );
  }

  const baseUrl = process.env.BACKEND_BASE_URL;
  if (!baseUrl) {
    console.error("[send-otp] BACKEND_BASE_URL is not set.");
    return NextResponse.json(
      { success: false, message: "Service temporarily unavailable. Please contact support." },
      { status: 503 }
    );
  }

  try {
    console.log(`[send-otp] → POST ${baseUrl}/api/auth/doctor-send-otp`, { phone: digits });

    const res = await fetch(`${baseUrl}/api/auth/doctor-send-otp`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone: digits }),
    });

    const data = (await res.json()) as {
      success?: boolean;
      message?: string;
      mode?: string;
      accountStatus?: string;
    };

    console.log(`[send-otp] ← ${res.status}`, data);

    if (!res.ok) {
      return NextResponse.json(
        {
          success: false,
          message: data.message ?? "Failed to send OTP. Please try again.",
        },
        { status: res.status >= 500 ? 502 : res.status }
      );
    }

    return NextResponse.json({
      success: true,
      message: data.message ?? "OTP sent successfully.",
      ...(data.mode ? { mode: data.mode } : {}),
    });
  } catch (err) {
    console.error("[send-otp] Backend request failed:", err);
    return NextResponse.json(
      { success: false, message: "Network error. Please try again later." },
      { status: 502 }
    );
  }
}
