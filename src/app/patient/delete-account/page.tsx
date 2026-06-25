import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle, Shield, Trash2, Info } from "lucide-react";
import Header from "@/components/Header";
import PatientDeleteForm from "@/components/PatientDeleteForm";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Request Account Deletion — Queue Token Patient",
  description:
    "Permanently delete your Queue Token patient account. Appointment records are retained per applicable regulations.",
};

const DELETED_ITEMS = [
  "Patient profile and personal information",
  "Login credentials and authentication data",
  "Appointment booking history",
  "App preferences and notification settings",
  "Saved clinic and doctor preferences",
];

const RETENTION_ITEMS = [
  {
    category: "Account and profile data",
    period: "2 years after the last appointment or account deletion, whichever is later",
  },
  {
    category: "Appointment history and health descriptions",
    period: "2 years from the date of the appointment",
  },
  {
    category: "Technical logs",
    period: "90 days, then deleted",
  },
];

export default function PatientDeleteAccountPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FDF8F6]">
      <Header />

      {/* Main content */}
      <main className="flex-1 max-w-3xl mx-auto w-full px-4 sm:px-6 py-8 space-y-6">
        {/* Page title */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Request Account Deletion</h1>
          <p className="mt-1 text-gray-500 text-sm">
            Permanently delete your Queue Token patient account and associated personal data.
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
            <Trash2 className="text-blue-600" size={18} aria-hidden="true" />
            <h2 id="deleted-heading" className="font-semibold text-gray-900">
              What gets deleted
            </h2>
          </div>
          <ul className="space-y-2.5" aria-label="Data that will be permanently deleted">
            {DELETED_ITEMS.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700">
                <span
                  className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0"
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
              We retain different categories of data for different periods, as detailed in our
              Privacy Policy:
            </p>
          </div>

          <ul className="space-y-3" aria-label="Data retained per category">
            {RETENTION_ITEMS.map((item) => (
              <li key={item.category} className="flex items-start gap-2.5 text-sm text-gray-700">
                <span
                  className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0"
                  aria-hidden="true"
                />
                <span>
                  <strong className="text-gray-900">{item.category}:</strong> {item.period}
                </span>
              </li>
            ))}
          </ul>

          <p className="mt-4 text-xs text-gray-500">
            <Link
              href="/patient/privacy-policy"
              className="text-[#E8192C] hover:underline focus:outline-none focus:underline"
            >
              See our full Privacy Policy for details.
            </Link>
          </p>
        </section>

        {/* Deletion form (client component) */}
        <PatientDeleteForm />
      </main>

      <Footer />
    </div>
  );
}
