"use client";

import { useEffect, useMemo, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin, Phone, ListOrdered, MoreVertical } from "lucide-react";
import { getDoctorInfo, getClinicDoctorIds, dateInfo, type BookingRecord } from "@/lib/queueMock";
import ClinicSplash from "@/components/ClinicSplash";
import "@/app/booking.css";
import "@/app/clinic.css";

const SPLASH_DURATION_MS = 5000;

function subscribeNoop() {
  return () => {};
}

function getServerSnapshot(): string {
  return "";
}

export default function ClinicHome({ clinicId }: { clinicId: string }) {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), SPLASH_DURATION_MS);
    return () => clearTimeout(timer);
  }, []);

  const doctorIds = useMemo(() => getClinicDoctorIds(clinicId), [clinicId]);
  const doctors = useMemo(() => doctorIds.map((id) => ({ id, info: getDoctorInfo(id) })), [doctorIds]);

  const rawSnapshot = useSyncExternalStore(
    subscribeNoop,
    () => {
      try {
        return doctorIds.map((id) => localStorage.getItem(`qt_booking_${id}`) ?? "").join("||");
      } catch {
        return "";
      }
    },
    getServerSnapshot
  );

  const activeBooking = useMemo<BookingRecord | null>(() => {
    const today = dateInfo(0).iso;
    for (const raw of rawSnapshot.split("||")) {
      if (!raw) continue;
      try {
        const parsed: BookingRecord = JSON.parse(raw);
        if (parsed.dateIso === today) return parsed;
      } catch {
        // malformed storage — skip
      }
    }
    return null;
  }, [rawSnapshot]);

  const activeDoctor = activeBooking ? getDoctorInfo(activeBooking.doctorId) : null;

  if (showSplash) {
    return <ClinicSplash />;
  }

  return (
    <div className="booking-page">
      <div className="bk-container">
        {activeBooking && activeDoctor && (
          <>
            <div className="ch-section-row">
              <div className="ch-section-title">Upcoming Appointments</div>
              <span className="ch-view-all">View all</span>
            </div>

            <div className="ch-appt-card">
              <div className="ch-appt-top">
                <div className="ch-appt-token-box">
                  <div className="ch-appt-token-label">Your Token</div>
                  <div className="ch-appt-token-num">{activeBooking.waitListLabel}</div>
                </div>
                <div className="ch-appt-info">
                  <div className="ch-appt-doctor-name">{activeDoctor.name}</div>
                  <div className="ch-appt-tags">{activeDoctor.specialization}</div>
                </div>
                <button type="button" className="ch-appt-menu" aria-label="More options">
                  <MoreVertical size={18} aria-hidden="true" />
                </button>
              </div>

              <div className="ch-appt-divider" />

              <div className="ch-appt-datetime">
                <Calendar size={14} aria-hidden="true" />
                <span>Estimated Date &amp; Time:</span>
              </div>
              <div className="ch-appt-datetime-value">
                {dateInfo(0).dmy} | {activeBooking.expectedTimeLabel}
              </div>

              <div className="ch-appt-current-token">
                <ListOrdered size={14} aria-hidden="true" />
                Current Token <strong>{activeBooking.currentServing}</strong>
              </div>
            </div>
          </>
        )}

        <div className="ch-section-title" style={{ marginTop: activeBooking ? 28 : 0, marginBottom: 16 }}>
          Doctors at this Clinic
        </div>

        <div className="ch-doctor-list">
          {doctors.map(({ id, info }) => (
            <div key={id} className="ch-doctor-card">
              <div className="ch-doctor-photo">
                <Image
                  src="/clinic-demo.jpg"
                  alt={`${info.clinicName} interior`}
                  fill
                  priority
                  sizes="(max-width: 560px) 100vw, 560px"
                  style={{ objectFit: "cover" }}
                />
                <span className={`ch-duty-badge${info.onDuty ? " on" : " off"}`}>
                  <span className="ch-duty-dot" aria-hidden="true" /> {info.onDuty ? "ON" : "OFF"}
                </span>
              </div>
              <div className="ch-doctor-body">
                <div className="ch-doctor-name">
                  {info.name} · {info.specialization}
                </div>
                <div className="ch-doctor-row">
                  <span className="ch-emoji" aria-hidden="true">🏥</span> {info.clinicName}
                </div>
                <div className="ch-doctor-row">
                  <MapPin size={14} aria-hidden="true" />
                  <span>{info.address}</span>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(info.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ch-link"
                  >
                    Get Direction
                  </a>
                </div>
                <div className="ch-doctor-row">
                  <Phone size={14} aria-hidden="true" />
                  <span>{info.phone}</span>
                  <a href={`tel:+91${info.phone}`} className="ch-link ch-link-inline">
                    Call Now
                  </a>
                </div>
                <Link href={`/d/${id}`} className="btn btn-primary ch-book-btn">
                  <Calendar size={16} aria-hidden="true" /> Book Appointment
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
