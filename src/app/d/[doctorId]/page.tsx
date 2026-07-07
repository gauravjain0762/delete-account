import type { Metadata } from "next";
import BookingFlow from "@/components/BookingFlow";

export const metadata: Metadata = {
  title: "Book Appointment — QueueToken",
  description: "Book an appointment with your doctor and get your live queue token instantly.",
};

export default async function DoctorBookingPage({
  params,
  searchParams,
}: {
  params: Promise<{ doctorId: string }>;
  searchParams: Promise<{ clinicId?: string }>;
}) {
  const { doctorId } = await params;
  const { clinicId } = await searchParams;

  return (
    <div className="min-h-screen flex flex-col bg-[#FDF8F6]">
      <main className="flex-1">
        <BookingFlow doctorId={doctorId} clinicId={clinicId ?? ""} />
      </main>
    </div>
  );
}
