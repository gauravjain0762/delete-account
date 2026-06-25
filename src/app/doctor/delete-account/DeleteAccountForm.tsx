"use client";

import { useState, FormEvent, useId } from "react";
import { useRouter } from "next/navigation";
import { Phone, Loader2, ArrowLeft, RefreshCw } from "lucide-react";

interface SendOtpApiResponse {
  success: boolean;
  message: string;
  mode?: string;
}

interface VerifyOtpApiResponse {
  success: boolean;
  message: string;
  token?: string;
}

interface DeleteApiResponse {
  success: boolean;
  message: string;
}

interface FormErrors {
  phone?: string;
  otp?: string;
  confirmText?: string;
  general?: string;
}

function maskPhone(digits: string): string {
  return `+91 ${digits.slice(0, 2)}••••••${digits.slice(-2)}`;
}

export default function DeleteAccountForm() {
  const router = useRouter();

  const [step, setStep] = useState<1 | 2>(1);
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [reason, setReason] = useState("");
  const [confirmText, setConfirmText] = useState("");
  const [acknowledged, setAcknowledged] = useState(false);
  const [sendingOtp, setSendingOtp] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const phoneId = useId();
  const otpId = useId();
  const reasonId = useId();
  const confirmTextId = useId();
  const acknowledgeId = useId();

  const isSubmitEnabled =
    otp.length === 6 && acknowledged && confirmText === "DELETE" && !submitting;

  function validatePhone(): string | undefined {
    const digits = phone.replace(/\D/g, "");
    if (!digits) return "Phone number is required.";
    if (digits.length !== 10) return "Enter a valid 10-digit mobile number.";
    return undefined;
  }

  async function sendOtp(e?: FormEvent) {
    if (e) e.preventDefault();
    const phoneError = validatePhone();
    if (phoneError) {
      setErrors({ phone: phoneError });
      return;
    }
    setErrors({});
    setSendingOtp(true);
    try {
      const res = await fetch("https://api.queuetoken.in/api/auth/doctor-send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: phone.replace(/\D/g, "") }),
      });
      const data: SendOtpApiResponse = await res.json();
      if (!data.success) {
  setErrors({ general: data.message ?? "Failed to send OTP. Please try again." });
  return;
}
      setOtp("");
      setStep(2);
    } catch {
      setErrors({ general: "Network error. Please check your connection and try again." });
    } finally {
      setSendingOtp(false);
    }
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const errs: FormErrors = {};
    if (otp.length !== 6) errs.otp = "Enter the 6-digit OTP sent to your phone.";
    if (confirmText !== "DELETE") errs.confirmText = "Type DELETE in all caps to confirm.";
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitting(true);
    try {
      // Step 1: verify OTP → get token
      const verifyRes = await fetch("https://api.queuetoken.in/api/auth/doctor-verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: phone.replace(/\D/g, ""), otp }),
      });
      const verifyData: VerifyOtpApiResponse = await verifyRes.json();
      if (!verifyData.success || !verifyData.token) {
        setErrors({ general: verifyData.message ?? "Invalid OTP. Please try again." });
        return;
      }

      // Step 2: delete account using the token
      const deleteRes = await fetch("https://api.queuetoken.in/api/doctor/account", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${verifyData.token}`,
        },
        body: JSON.stringify({ reason: reason.trim() || "" }),
      });
      const deleteData: DeleteApiResponse = await deleteRes.json();
      if (!deleteData.success) {
        setErrors({ general: deleteData.message ?? "Failed to delete account. Please try again." });
        return;
      }

      router.push("/doctor/delete-account/confirmation");
    } catch {
      setErrors({ general: "Network error. Please check your connection and try again." });
    } finally {
      setSubmitting(false);
    }
  }

  // ── Step 1: Phone entry ──────────────────────────────────────────────────────
  if (step === 1) {
    return (
      <section
        aria-labelledby="form-heading"
        className="bg-white rounded-lg border border-gray-200 p-6"
      >
        <h2 id="form-heading" className="font-semibold text-gray-900 mb-1">
          Verify your identity
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          Enter your registered mobile number to receive a one-time password.
        </p>

        {errors.general && (
          <div
            role="alert"
            aria-live="assertive"
            className="mb-5 bg-red-50 border border-red-200 rounded-md p-3 text-sm text-red-700"
          >
            {errors.general}
          </div>
        )}

        <form onSubmit={sendOtp} noValidate className="space-y-5">
          <div>
            <label
              htmlFor={phoneId}
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Mobile number{" "}
              <span aria-hidden="true" className="text-red-500">
                *
              </span>
            </label>
            <div className="flex">
              <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm select-none">
                +91
              </span>
              <div className="relative flex-1">
                <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <Phone size={15} className="text-gray-400" aria-hidden="true" />
                </span>
                <input
                  id={phoneId}
                  type="tel"
                  inputMode="numeric"
                  maxLength={10}
                  value={phone}
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, "").slice(0, 10);
                    setPhone(val);
                    if (errors.phone) setErrors((p) => ({ ...p, phone: undefined }));
                  }}
                  aria-required="true"
                  aria-describedby={errors.phone ? `${phoneId}-error` : undefined}
                  aria-invalid={!!errors.phone}
                  className={`w-full pl-9 pr-3 py-2 border rounded-r-md text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#E8192C] transition-colors ${
                    errors.phone ? "border-red-400 bg-red-50" : "border-gray-300 bg-white"
                  }`}
                  placeholder="9876543210"
                />
              </div>
            </div>
            {errors.phone && (
              <p
                id={`${phoneId}-error`}
                role="alert"
                className="mt-1 text-xs text-red-600"
              >
                {errors.phone}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={sendingOtp}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-md text-sm font-semibold text-white bg-[#FB2C36] hover:bg-[#FF4855] active:bg-[#D91E2A] focus:outline-none focus:ring-2 focus:ring-[#FB2C36] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {sendingOtp ? (
              <>
                <Loader2 size={16} className="animate-spin" aria-hidden="true" />
                Sending OTP…
              </>
            ) : (
              "Send OTP"
            )}
          </button>
        </form>
      </section>
    );
  }

  // ── Step 2: OTP + deletion confirmation ────────────────────────────────────
  const confirmTextBorderClass = errors.confirmText
    ? "border-red-400 bg-red-50"
    : confirmText === "DELETE"
      ? "border-green-500 bg-green-50"
      : "border-gray-300 bg-white";

  return (
    <section
      aria-labelledby="form-heading"
      className="bg-white rounded-lg border border-gray-200 p-6"
    >
      <div className="flex items-center gap-2 mb-5">
        <button
          type="button"
          onClick={() => {
            setStep(1);
            setErrors({});
          }}
          className="text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#E8192C] rounded p-0.5"
          aria-label="Back to phone number entry"
        >
          <ArrowLeft size={18} />
        </button>
        <h2 id="form-heading" className="font-semibold text-gray-900">
          Confirm deletion
        </h2>
      </div>

      {/* OTP sent banner */}
      <div className="mb-6 bg-blue-50 border border-blue-100 rounded-md px-3 py-2.5 flex items-center justify-between gap-3">
        <p className="text-sm text-blue-800">
          OTP sent to <strong>{maskPhone(phone.replace(/\D/g, ""))}</strong>
        </p>
        <button
          type="button"
          onClick={() => sendOtp()}
          disabled={sendingOtp}
          className="flex items-center gap-1 text-xs text-blue-600 hover:text-blue-700 focus:outline-none focus:underline disabled:opacity-50 shrink-0"
          aria-label="Resend OTP"
        >
          <RefreshCw size={12} aria-hidden="true" />
          {sendingOtp ? "Sending…" : "Resend"}
        </button>
      </div>

      {errors.general && (
        <div
          role="alert"
          aria-live="assertive"
          className="mb-5 bg-red-50 border border-red-200 rounded-md p-3 text-sm text-red-700"
        >
          {errors.general}
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        {/* OTP */}
        <div>
          <label
            htmlFor={otpId}
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            One-time password{" "}
            <span aria-hidden="true" className="text-red-500">
              *
            </span>
          </label>
          <input
            id={otpId}
            type="text"
            inputMode="numeric"
            maxLength={6}
            value={otp}
            onChange={(e) => {
              const val = e.target.value.replace(/\D/g, "").slice(0, 6);
              setOtp(val);
              if (errors.otp) setErrors((p) => ({ ...p, otp: undefined }));
            }}
            aria-required="true"
            aria-describedby={errors.otp ? `${otpId}-error` : `${otpId}-hint`}
            aria-invalid={!!errors.otp}
            autoComplete="one-time-code"
            autoFocus
            spellCheck={false}
            className={`w-full px-3 py-2 border rounded-md text-sm text-gray-900 font-mono tracking-[0.35em] focus:outline-none focus:ring-2 focus:ring-[#E8192C] transition-colors ${
              errors.otp
                ? "border-red-400 bg-red-50"
                : otp.length === 6
                  ? "border-green-500 bg-green-50"
                  : "border-gray-300 bg-white"
            }`}
            placeholder="123456"
          />
          {errors.otp ? (
            <p id={`${otpId}-error`} role="alert" className="mt-1 text-xs text-red-600">
              {errors.otp}
            </p>
          ) : (
            <p id={`${otpId}-hint`} className="mt-1 text-xs text-gray-400">
              Enter the 6-digit code sent to your mobile.
            </p>
          )}
        </div>

        {/* Reason (optional) */}
        <div>
          <label
            htmlFor={reasonId}
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Reason for deletion{" "}
            <span className="text-gray-400 font-normal">(optional)</span>
          </label>
          <textarea
            id={reasonId}
            rows={3}
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#E8192C] resize-none transition-colors"
            placeholder="Tell us why you're deleting your account (optional)"
          />
        </div>

        {/* Acknowledgement checkbox */}
        <div className="flex items-start gap-3 p-4 bg-[#FDF8F6] rounded-md border border-gray-200">
          <input
            id={acknowledgeId}
            type="checkbox"
            checked={acknowledged}
            onChange={(e) => setAcknowledged(e.target.checked)}
            className="mt-0.5 w-4 h-4 cursor-pointer accent-red-600 shrink-0"
          />
          <label
            htmlFor={acknowledgeId}
            className="text-sm text-gray-700 cursor-pointer leading-relaxed"
          >
            I understand that deleting my account is{" "}
            <strong>permanent and cannot be undone</strong>. My doctor profile, login
            credentials, and app data will be permanently removed.
          </label>
        </div>

        {/* Type DELETE to confirm */}
        <div>
          <label
            htmlFor={confirmTextId}
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Type{" "}
            <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs font-mono text-red-600 select-all">
              DELETE
            </code>{" "}
            to confirm{" "}
            <span aria-hidden="true" className="text-red-500">
              *
            </span>
          </label>
          <input
            id={confirmTextId}
            type="text"
            value={confirmText}
            onChange={(e) => {
              setConfirmText(e.target.value);
              if (errors.confirmText)
                setErrors((p) => ({ ...p, confirmText: undefined }));
            }}
            aria-required="true"
            aria-describedby={
              errors.confirmText
                ? `${confirmTextId}-error`
                : `${confirmTextId}-hint`
            }
            aria-invalid={!!errors.confirmText}
            className={`w-full px-3 py-2 border rounded-md text-sm text-gray-900 font-mono focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors ${confirmTextBorderClass}`}
            placeholder="DELETE"
            spellCheck={false}
            autoComplete="off"
          />
          {errors.confirmText ? (
            <p
              id={`${confirmTextId}-error`}
              role="alert"
              className="mt-1 text-xs text-red-600"
            >
              {errors.confirmText}
            </p>
          ) : (
            <p id={`${confirmTextId}-hint`} className="mt-1 text-xs text-gray-400">
              Type DELETE in all caps to enable the submit button.
            </p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={!isSubmitEnabled}
          aria-disabled={!isSubmitEnabled}
          className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-md text-sm font-semibold text-white bg-red-600 hover:bg-red-700 active:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          {submitting ? (
            <>
              <Loader2 size={16} className="animate-spin" aria-hidden="true" />
              Processing…
            </>
          ) : (
            "Delete My Account"
          )}
        </button>
      </form>
    </section>
  );
}
