import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "QueueToken — Smart Queue Management for Clinics",
  description: "Patient & Doctor Management System",
  openGraph: {
    title: "QueueToken — Smart Queue Management for Clinics",
    description: "Patient & Doctor Management System",
    url: "https://queuetoken.in",
    siteName: "QueueToken",
    images: [
      {
        url: "https://queuetoken.in/queuetoken-logo.png",
        width: 512,
        height: 512,
        alt: "QueueToken Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "QueueToken — Smart Queue Management for Clinics",
    description: "Patient & Doctor Management System",
    images: ["https://queuetoken.in/queuetoken-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
