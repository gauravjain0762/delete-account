import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header
      className="bg-white/95 backdrop-blur-xl border-b border-black/[0.08] sticky top-0 z-10"
      style={{ boxShadow: "0 1px 0 rgba(0,0,0,0.04), 0 2px 8px rgba(0,0,0,0.04)" }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3.5 flex items-center">
        <Link href="/" className="inline-flex items-center" aria-label="QueueToken — home">
          <Image
            src="/queuetoken-logo.png"
            alt="QueueToken logo"
            width={36}
            height={36}
            priority
            className="rounded-lg"
          />
        </Link>
      </div>
    </header>
  );
}
