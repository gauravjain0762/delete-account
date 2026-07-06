import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ClinicHome from "@/components/ClinicHome";

export const metadata: Metadata = {
  title: "Clinic — QueueToken",
  description: "View doctors available at this clinic and book an appointment.",
};

export default async function ClinicPage({
  params,
}: {
  params: Promise<{ clinicId: string }>;
}) {
  const { clinicId } = await params;

  return (
    <div className="min-h-screen flex flex-col bg-[#FDF8F6]">
      <Header />
      <main className="flex-1">
        <ClinicHome clinicId={clinicId} />
      </main>
      <Footer />
    </div>
  );
}
