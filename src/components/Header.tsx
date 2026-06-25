import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header
      className="bg-white/95 backdrop-blur-xl border-b border-black/[0.08] sticky top-0 z-10"
      style={{ boxShadow: "0 1px 0 rgba(0,0,0,0.04), 0 2px 8px rgba(0,0,0,0.04)" }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3.5 flex items-center gap-2.5">
        <Link href="/" className="flex items-center gap-2.5" aria-label="QueueToken — home">
          <Image
            src="https://res.cloudinary.com/dbazlbkfj/image/upload/v1779962175/WhatsApp_Image_2026-05-28_at_3.12.36_PM_wa8gw9.jpg"
            alt="QueueToken logo"
            width={36}
            height={36}
            priority
            className="rounded-lg"
          />
          <span
            className="font-extrabold text-[#111111] text-lg"
            style={{
              fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', sans-serif)",
              letterSpacing: "-0.02em",
            }}
          >
            Queue<span className="text-[#E8192C]">Token</span>
          </span>
        </Link>
      </div>
    </header>
  );
}
