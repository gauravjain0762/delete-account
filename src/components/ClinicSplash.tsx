import Image from "next/image";
import "@/app/clinic.css";

export default function ClinicSplash() {
  return (
    <div className="booking-page ch-splash">
      <div className="ch-splash-logo">
        <Image src="/queuetoken-logo.png" alt="QueueToken" width={72} height={72} priority />
      </div>
      <div className="ch-splash-word">
        <span className="ch-splash-word-queue">Queue</span>
        <span className="ch-splash-word-token">TOKEN</span>
      </div>
      <p className="ch-splash-tagline">Care without the wait</p>
      <div className="ch-splash-footer">
        <div>Developed By</div>
        <div>Codetown Technologies | Bliss Technologies</div>
      </div>
    </div>
  );
}
