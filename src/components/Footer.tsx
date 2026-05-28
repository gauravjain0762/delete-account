import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white mt-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6 space-y-4">
        {/* Nav links */}
        <nav
          aria-label="Footer navigation"
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm"
        >
          <Link
            href="/doctor/delete-account"
            className="text-blue-600 hover:underline focus:outline-none focus:underline"
          >
            Delete Account
          </Link>
          <Link
            href="/doctor/privacy-policy"
            className="text-blue-600 hover:underline focus:outline-none focus:underline"
          >
            Privacy Policy
          </Link>
          <Link
            href="/doctor/terms-and-conditions"
            className="text-blue-600 hover:underline focus:outline-none focus:underline"
          >
            Terms &amp; Conditions
          </Link>
          <a
            href="mailto:queuetoken@gmail.com"
            className="text-blue-600 hover:underline focus:outline-none focus:underline"
          >
            Support: queuetoken@gmail.com
          </a>
        </nav>

        {/* Phone */}
        <p className="text-center text-sm text-gray-500">
          Phone:{" "}
          <a
            href="tel:+919509647637"
            className="text-blue-600 hover:underline focus:outline-none focus:underline"
          >
            +91 95096 47637
          </a>
        </p>

        {/* Copyright */}
        <p className="text-center text-xs text-gray-400">
          &copy; 2026 Codetown Technologies &amp; Bliss Technologies
        </p>
      </div>
    </footer>
  );
}
