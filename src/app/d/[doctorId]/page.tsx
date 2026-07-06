import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingFlow from "@/components/BookingFlow";

export const metadata: Metadata = {
  title: "Book Appointment — QueueToken",
  description: "Book an appointment with your doctor and get your live queue token instantly.",
};

export default async function DoctorBookingPage({
  params,
}: {
  params: Promise<{ doctorId: string }>;
}) {
  const { doctorId } = await params;

  return (
    <div className="min-h-screen flex flex-col bg-[#FDF8F6]">
      <Header />
      <main className="flex-1">
        <BookingFlow doctorId={doctorId} />
      </main>
      <Footer />
    </div>
  );
}
