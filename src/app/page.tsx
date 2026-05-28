import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "QueueToken — Coming Soon",
  description:
    "QueueToken — Care Without the Wait. Smart Doctor Appointment & Queue Token Management System.",
};

export default function HomePage() {
  return (
    <div
      className="relative min-h-screen flex flex-col"
      style={{
        backgroundColor: "#fdf2f3",
        backgroundImage:
          "radial-gradient(circle, rgba(192,32,44,0.13) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }}
    >
      {/* Fixed page-edge border frame */}
      <div
        className="fixed inset-0 z-50 pointer-events-none border-[3px] border-[#C0202C]"
        aria-hidden="true"
      />

      {/* Top-left wordmark */}
      <header className="px-6 pt-6 pb-2 shrink-0">
        <span
          className="font-bold text-sm tracking-widest uppercase"
          style={{ color: "#C0202C" }}
        >
          Queue Token
        </span>
      </header>

      {/* Centered content */}
      <main className="flex-1 flex items-center justify-center px-4 py-10">
        <div className="flex flex-col items-center gap-7 text-center">
          {/* Logo card */}
          <div className="w-36 h-36 bg-white rounded-2xl shadow-lg flex items-center justify-center p-3">
            <Image
              src="https://res.cloudinary.com/dbazlbkfj/image/upload/v1779962175/WhatsApp_Image_2026-05-28_at_3.12.36_PM_wa8gw9.jpg"
              alt="QueueToken logo"
              width={108}
              height={108}
              className="object-contain rounded-xl"
              priority
            />
          </div>

          {/* Headline */}
          <h1
            className="text-5xl sm:text-6xl font-bold font-serif tracking-tight leading-tight"
            style={{ color: "#C0202C" }}
          >
            Coming Soon
          </h1>

          {/* Tagline */}
          <p className="text-base sm:text-lg italic text-gray-400">
            Care Without the Wait
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer
        className="shrink-0 border-t border-gray-200 px-6 py-5"
        style={{ backgroundColor: "rgba(255,255,255,0.65)" }}
      >
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          {/* Left: wordmark + copyright */}
          <div className="flex flex-col gap-1 text-center sm:text-left">
            <span className="font-bold text-sm" style={{ color: "#C0202C" }}>
              Queue Token
            </span>
            <span className="text-xs text-gray-400">
              © 2026 Queue Token. Care Without the Wait. All rights reserved.
            </span>
          </div>

          {/* Right: doc link groups */}
          <div className="flex flex-col gap-1.5 text-xs text-gray-400 text-center sm:text-right">
            <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-1.5 gap-y-1">
              <span className="font-medium text-gray-500">Doctor:</span>
              <Link
                href="/doctor/privacy-policy"
                className="hover:text-[#C0202C] hover:underline transition-colors"
              >
                Privacy Policy
              </Link>
              <span aria-hidden="true">·</span>
              <Link
                href="/doctor/terms-and-conditions"
                className="hover:text-[#C0202C] hover:underline transition-colors"
              >
                Terms of Service
              </Link>
            </div>
            <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-1.5 gap-y-1">
              <span className="font-medium text-gray-500">Patient:</span>
              <Link
                href="/patient/privacy-policy"
                className="hover:text-[#C0202C] hover:underline transition-colors"
              >
                Privacy Policy
              </Link>
              <span aria-hidden="true">·</span>
              <Link
                href="/patient/terms-and-conditions"
                className="hover:text-[#C0202C] hover:underline transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
