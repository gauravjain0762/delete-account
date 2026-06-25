"use client";

import { useState, FormEvent, useId } from "react";
import { Phone, Loader2, ArrowLeft, RefreshCw, CheckCircle2 } from "lucide-react";

// ── API response shapes ─────────────────────────────────────────────────────

interface SendOtpResponse {
  success: boolean;
  message: string;
}

interface VerifyOtpResponse {
  success: boolean;
  message: string;
  token?: string;
}

interface DeleteAccountResponse {
  success: boolean;
  message: string;
}

// ── Error bag ───────────────────────────────────────────────────────────────

interface FormErrors {
  mobile?: string;
  otp?: string;
  confirm?: string;
  general?: string;
}

// ── Helpers ─────────────────────────────────────────────────────────────────

function maskMobile(digits: string): string {
  return `+91 ${digits.slice(0, 2)}••••••${digits.slice(-2)}`;
}

// ── Component ────────────────────────────────────────────────────────────────

export default function PatientDeleteForm() {
  const [step, setStep] = useState<"mobile" | "otp" | "confirm" | "done">("mobile");

  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [token, setToken] = useState("");
  const [reason, setReason] = useState("");
  const [confirmText, setConfirmText] = useState("");
  const [acknowledged, setAcknowledged] = useState(false);

  const [sendingOtp, setSendingOtp] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [errors, setErrors] = useState<FormErrors>({});

  const mobileId = useId();
  const otpId = useId();
  const reasonId = useId();
  const confirmTextId = useId();
  const acknowledgeId = useId();

  const isDeleteEnabled = acknowledged && confirmText === "DELETE" && !submitting;

  // ── Validation ─────────────────────────────────────────────────────────────

  function validateMobile(): string | undefined {
    const digits = mobile.replace(/\D/g, "");
    if (!digits) return "Mobile number is required.";
    if (digits.length !== 10) return "Enter a valid 10-digit mobile number.";
    return undefined;
  }

  // ── API calls ──────────────────────────────────────────────────────────────

  async function sendOtp(e?: FormEvent) {
    if (e) e.preventDefault();
    const mobileError = validateMobile();
    if (mobileError) {
      setErrors({ mobile: mobileError });
      return;
    }
    setErrors({});
    setSendingOtp(true);
    try {
      const res = await fetch("https://api.queuetoken.in/api/patient/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobile: mobile.replace(/\D/g, "") }),
      });
      const data: SendOtpResponse = await res.json();
      if (!data.success) {
        setErrors({ general: data.message ?? "Failed to send OTP. Please try again." });
        return;
      }
      setOtp("");
      setStep("otp");
    } catch {
      setErrors({ general: "Network error. Please check your connection and try again." });
    } finally {
      setSendingOtp(false);
    }
  }

  async function verifyOtp(e: FormEvent) {
    e.preventDefault();
    if (otp.length !== 6) {
      setErrors({ otp: "Enter the 6-digit OTP sent to your mobile." });
      return;
    }
    setErrors({});
    setVerifying(true);
    try {
      const res = await fetch("https://api.queuetoken.in/api/patient/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobile: mobile.replace(/\D/g, ""), otp }),
      });
      const data: VerifyOtpResponse = await res.json();
      if (!data.success || !data.token) {
        setErrors({ otp: data.message ?? "Invalid or expired OTP." });
        return;
      }
      setToken(data.token);
      setStep("confirm");
    } catch {
      setErrors({ general: "Network error. Please check your connection and try again." });
    } finally {
      setVerifying(false);
    }
  }

  async function handleDelete(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const errs: FormErrors = {};
    if (!acknowledged) errs.confirm = "You must acknowledge that this action is permanent.";
    if (confirmText !== "DELETE") errs.confirm = "Type DELETE in all caps to confirm.";
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitting(true);
    try {
      const res = await fetch("https://api.queuetoken.in/api/patient/account", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ reason: reason.trim() || "Not using" }),
      });
      const data: DeleteAccountResponse = await res.json();
      if (!data.success) {
        setErrors({ general: data.message ?? "Failed to delete account. Please try again." });
        return;
      }
      setStep("done");
    } catch {
      setErrors({ general: "Network error. Please check your connection and try again." });
    } finally {
      setSubmitting(false);
    }
  }

  // ── Error banner (shared) ──────────────────────────────────────────────────

  function ErrorBanner({ message }: { message: string }) {
    return (
      <div
        role="alert"
        aria-live="assertive"
        className="mb-5 bg-red-50 border border-red-200 rounded-md p-3 text-sm text-red-700"
      >
        {message}
      </div>
    );
  }

  // ── STEP 4: Done ───────────────────────────────────────────────────────────

  if (step === "done") {
    return (
      <section
        aria-labelledby="done-heading"
        className="bg-white rounded-lg border border-gray-200 p-8 text-center"
      >
        <div className="flex justify-center mb-4" aria-hidden="true">
          <CheckCircle2 size={48} className="text-green-500" />
        </div>
        <h2 id="done-heading" className="text-lg font-bold text-gray-900 mb-2">
          Account Deleted Successfully
        </h2>
        <p className="text-sm text-gray-500 leading-relaxed">
          Your QueueToken patient account has been permanently deleted. Appointment history and
          health descriptions will be retained for 2 years per our Privacy Policy before
          permanent removal.
        </p>
      </section>
    );
  }

  // ── STEP 1: Mobile entry ───────────────────────────────────────────────────

  if (step === "mobile") {
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

        {errors.general && <ErrorBanner message={errors.general} />}

        <form onSubmit={sendOtp} noValidate className="space-y-5">
          <div>
            <label
              htmlFor={mobileId}
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Mobile number{" "}
              <span aria-hidden="true" className="text-red-500">*</span>
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
                  id={mobileId}
                  type="tel"
                  inputMode="numeric"
                  maxLength={10}
                  value={mobile}
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, "").slice(0, 10);
                    setMobile(val);
                    if (errors.mobile) setErrors((p) => ({ ...p, mobile: undefined }));
                  }}
                  aria-required="true"
                  aria-describedby={errors.mobile ? `${mobileId}-error` : undefined}
                  aria-invalid={!!errors.mobile}
                  className={`w-full pl-9 pr-3 py-2 border rounded-r-md text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#E8192C] transition-colors ${
                    errors.mobile ? "border-red-400 bg-red-50" : "border-gray-300 bg-white"
                  }`}
                  placeholder="9876543210"
                />
              </div>
            </div>
            {errors.mobile && (
              <p id={`${mobileId}-error`} role="alert" className="mt-1 text-xs text-red-600">
                {errors.mobile}
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

  // ── STEP 2: OTP entry ──────────────────────────────────────────────────────

  if (step === "otp") {
    return (
      <section
        aria-labelledby="form-heading"
        className="bg-white rounded-lg border border-gray-200 p-6"
      >
        <div className="flex items-center gap-2 mb-5">
          <button
            type="button"
            onClick={() => {
              setStep("mobile");
              setErrors({});
              setOtp("");
            }}
            className="text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#E8192C] rounded p-0.5"
            aria-label="Back to mobile number entry"
          >
            <ArrowLeft size={18} />
          </button>
          <h2 id="form-heading" className="font-semibold text-gray-900">
            Enter OTP
          </h2>
        </div>

        {/* OTP sent banner */}
        <div className="mb-6 bg-blue-50 border border-blue-100 rounded-md px-3 py-2.5 flex items-center justify-between gap-3">
          <p className="text-sm text-blue-800">
            OTP sent to{" "}
            <strong>{maskMobile(mobile.replace(/\D/g, ""))}</strong>
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

        {errors.general && <ErrorBanner message={errors.general} />}

        <form onSubmit={verifyOtp} noValidate className="space-y-5">
          <div>
            <label
              htmlFor={otpId}
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              One-time password{" "}
              <span aria-hidden="true" className="text-red-500">*</span>
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

          <button
            type="submit"
            disabled={verifying}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-md text-sm font-semibold text-white bg-[#FB2C36] hover:bg-[#FF4855] active:bg-[#D91E2A] focus:outline-none focus:ring-2 focus:ring-[#FB2C36] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {verifying ? (
              <>
                <Loader2 size={16} className="animate-spin" aria-hidden="true" />
                Verifying…
              </>
            ) : (
              "Verify OTP"
            )}
          </button>
        </form>
      </section>
    );
  }

  // ── STEP 3: Confirm deletion ───────────────────────────────────────────────

  const confirmBorderClass = errors.confirm
    ? "border-red-400 bg-red-50"
    : confirmText === "DELETE"
      ? "border-green-500 bg-green-50"
      : "border-gray-300 bg-white";

  return (
    <section
      aria-labelledby="form-heading"
      className="bg-white rounded-lg border border-gray-200 p-6"
    >
      <h2 id="form-heading" className="font-semibold text-gray-900 mb-1">
        Confirm permanent deletion
      </h2>
      <p className="text-sm text-gray-500 mb-6">
        This will permanently delete your QueueToken patient account. This action cannot be
        reversed.
      </p>

      {errors.general && <ErrorBanner message={errors.general} />}

      <form onSubmit={handleDelete} noValidate className="space-y-5">
        {/* Reason (optional) */}
        <div>
          <label
            htmlFor={reasonId}
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Reason for leaving{" "}
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
            onChange={(e) => {
              setAcknowledged(e.target.checked);
              if (errors.confirm) setErrors((p) => ({ ...p, confirm: undefined }));
            }}
            className="mt-0.5 w-4 h-4 cursor-pointer accent-red-600 shrink-0"
          />
          <label
            htmlFor={acknowledgeId}
            className="text-sm text-gray-700 cursor-pointer leading-relaxed"
          >
            I understand that deleting my account is{" "}
            <strong>permanent and cannot be undone</strong>. My patient profile, appointment
            history, and app data will be permanently removed.
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
            <span aria-hidden="true" className="text-red-500">*</span>
          </label>
          <input
            id={confirmTextId}
            type="text"
            value={confirmText}
            onChange={(e) => {
              setConfirmText(e.target.value);
              if (errors.confirm) setErrors((p) => ({ ...p, confirm: undefined }));
            }}
            aria-required="true"
            aria-describedby={errors.confirm ? `${confirmTextId}-error` : `${confirmTextId}-hint`}
            aria-invalid={!!errors.confirm}
            className={`w-full px-3 py-2 border rounded-md text-sm text-gray-900 font-mono focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors ${confirmBorderClass}`}
            placeholder="DELETE"
            spellCheck={false}
            autoComplete="off"
          />
          {errors.confirm ? (
            <p
              id={`${confirmTextId}-error`}
              role="alert"
              className="mt-1 text-xs text-red-600"
            >
              {errors.confirm}
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
          disabled={!isDeleteEnabled}
          aria-disabled={!isDeleteEnabled}
          className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-md text-sm font-semibold text-white bg-red-600 hover:bg-red-700 active:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          {submitting ? (
            <>
              <Loader2 size={16} className="animate-spin" aria-hidden="true" />
              Processing…
            </>
          ) : (
            "Permanently Delete My Account"
          )}
        </button>
      </form>
    </section>
  );
}
