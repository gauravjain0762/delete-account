import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AlertTriangle, Shield, Trash2, Clock, Info } from "lucide-react";
import DeleteAccountForm from "./DeleteAccountForm";

export const metadata: Metadata = {
  title: "Request Account Deletion — QueueToken",
  description:
    "Permanently delete your QueueToken doctor account. Patient records are retained per medical regulations.",
};

const DELETED_ITEMS = [
  "Doctor profile and personal information",
  "Login credentials and authentication data",
  "App preferences and customization settings",
  "Notification settings and device tokens",
  "In-app messages and draft notes",
];

const RETAINED_ITEMS = [
  "Patient medical records and health history",
  "Prescriptions and medication orders",
  "Consultation history and clinical notes",
  "Audit logs required for regulatory compliance",
  "Billing and payment records",
];

const RETENTION_YEARS = 7;

export default function DeleteAccountPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-4 flex items-center gap-3">
          <Image
            src="https://res.cloudinary.com/dbazlbkfj/image/upload/v1779861258/motion.div_awgt5c.png"
            alt="QueueToken logo"
            width={48}
            height={48}
            priority
          />
          <span className="font-semibold text-gray-900 text-lg tracking-tight">
            QueueToken
          </span>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 max-w-3xl mx-auto w-full px-4 sm:px-6 py-8 space-y-6">
        {/* Page title */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Request Account Deletion</h1>
          <p className="mt-1 text-gray-500 text-sm">
            Permanently delete your QueueToken doctor account and associated personal data.
          </p>
        </div>

        {/* Warning banner */}
        <div
          role="alert"
          className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex gap-3"
        >
          <AlertTriangle
            className="text-amber-600 shrink-0 mt-0.5"
            size={18}
            aria-hidden="true"
          />
          <p className="text-amber-800 text-sm leading-relaxed">
            This action is <strong>permanent and cannot be undone</strong>. Please read the
            information below carefully before proceeding.
          </p>
        </div>

        {/* What gets deleted */}
        <section
          aria-labelledby="deleted-heading"
          className="bg-white rounded-lg border border-gray-200 p-6"
        >
          <div className="flex items-center gap-2 mb-4">
            <Trash2 className="text-red-500" size={18} aria-hidden="true" />
            <h2 id="deleted-heading" className="font-semibold text-gray-900">
              What gets deleted
            </h2>
          </div>
          <ul className="space-y-2.5" aria-label="Data that will be permanently deleted">
            {DELETED_ITEMS.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700">
                <span
                  className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* What is retained */}
        <section
          aria-labelledby="retained-heading"
          className="bg-white rounded-lg border border-gray-200 p-6"
        >
          <div className="flex items-center gap-2 mb-4">
            <Shield className="text-blue-600" size={18} aria-hidden="true" />
            <h2 id="retained-heading" className="font-semibold text-gray-900">
              What is retained
            </h2>
          </div>

          <div className="bg-blue-50 border border-blue-100 rounded-md p-3 mb-4 flex gap-2.5">
            <Info className="text-blue-600 shrink-0 mt-0.5" size={15} aria-hidden="true" />
            <p className="text-blue-800 text-xs leading-relaxed">
              Under applicable medical record retention laws, the following data must be retained
              for a minimum of <strong>{RETENTION_YEARS} years</strong> from the date of last
              patient interaction, regardless of account deletion. This is required by healthcare
              regulations to protect patient safety and continuity of care.
            </p>
          </div>

          <ul className="space-y-2.5" aria-label="Data retained per medical regulations">
            {RETAINED_ITEMS.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700">
                <span
                  className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs text-gray-500">
            <Clock size={13} aria-hidden="true" />
            <span>
              Retained for <strong>{RETENTION_YEARS} years</strong> per medical record retention
              regulations
            </span>
          </div>
        </section>

        {/* Deletion form (client component) */}
        <DeleteAccountForm />
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white mt-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-500">
          <span>
            Need help?{" "}
            <a
              href="mailto:support@queuetoken.in"
              className="text-blue-600 hover:underline focus:outline-none focus:underline"
            >
              support@queuetoken.in
            </a>
          </span>
          <Link
            href="/privacy-policy"
            className="text-blue-600 hover:underline focus:outline-none focus:underline"
          >
            Privacy Policy
          </Link>
        </div>
      </footer>
    </div>
  );
}
