import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Clock, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Deletion Request Received — QueueToken",
  description:
    "Your QueueToken account deletion request has been received and will be processed.",
};

export default function ConfirmationPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FDF8F6]">
      <Header />
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="max-w-md w-full bg-white rounded-xl border border-gray-200 shadow-sm p-8 text-center">
          <div className="flex justify-center mb-5" aria-hidden="true">
            <CheckCircle2 size={52} className="text-green-500" />
          </div>

          <h1 className="text-xl font-bold text-gray-900 mb-2">
            Deletion Request Received
          </h1>
          <p className="text-gray-500 text-sm mb-6 leading-relaxed">
            Your account deletion request has been submitted successfully. We will process it
            within <strong>7 business days</strong>.
          </p>

          <div className="space-y-3 text-left mb-6">
            <div className="flex items-start gap-3 bg-blue-50 rounded-md p-3">
              <Phone
                size={16}
                className="text-blue-600 shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <p className="text-sm text-blue-800 leading-relaxed">
                A confirmation SMS will be sent to your registered mobile number.
              </p>
            </div>
            <div className="flex items-start gap-3 bg-amber-50 rounded-md p-3">
              <Clock
                size={16}
                className="text-amber-600 shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <p className="text-sm text-amber-800 leading-relaxed">
                Patient records, prescriptions, and consultation history will be retained
                per applicable medical record retention regulations.
              </p>
            </div>
          </div>

          <p className="text-xs text-gray-400 mb-5">
            Questions?{" "}
            <a
              href="mailto:queuetoken@gmail.com"
              className="text-[#E8192C] hover:underline focus:outline-none focus:underline"
            >
              Contact support
            </a>
          </p>

          <Link
            href="/"
            className="text-sm text-[#E8192C] hover:opacity-80 underline underline-offset-2 focus:outline-none"
          >
            Return to home
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
