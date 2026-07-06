"use client";

import { useEffect, useMemo, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin, Hospital, Layers, MoreVertical, XCircle, Loader2, AlertCircle } from "lucide-react";
import { fetchClinic, fetchAppointment, fetchAppointmentPreview, type ApiClinic, type ApiDoctor, type AppointmentDetails } from "@/lib/api";
import { bookingKey, parseStoredBooking, removeStoredBooking, type StoredBooking } from "@/lib/booking";
import { useQueueSocket } from "@/lib/socket";
import { dateInfo } from "@/lib/dateUtils";
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

  const [loadState, setLoadState] = useState<"loading" | "error" | "ready">("loading");
  const [loadError, setLoadError] = useState("");
  const [clinic, setClinic] = useState<ApiClinic | null>(null);
  const [doctors, setDoctors] = useState<ApiDoctor[]>([]);

  useEffect(() => {
    let cancelled = false;
    fetchClinic(clinicId)
      .then((res) => {
        if (cancelled) return;
        setClinic(res.clinic);
        setDoctors(res.doctors);
        setLoadState("ready");
      })
      .catch((err: Error) => {
        if (cancelled) return;
        setLoadError(err.message || "Failed to load this clinic.");
        setLoadState("error");
      });
    return () => {
      cancelled = true;
    };
  }, [clinicId]);

  const rawSnapshot = useSyncExternalStore(
    subscribeNoop,
    () => {
      try {
        return doctors.map((d) => localStorage.getItem(bookingKey(d.id)) ?? "").join("||");
      } catch {
        return "";
      }
    },
    getServerSnapshot
  );

  const activeBooking = useMemo<StoredBooking | null>(() => {
    for (const raw of rawSnapshot.split("||")) {
      const parsed = parseStoredBooking(raw || null);
      if (parsed) return parsed;
    }
    return null;
  }, [rawSnapshot]);

  const [menuOpen, setMenuOpen] = useState(false);
  const [cancelled, setCancelled] = useState(false);
  const booking = cancelled ? null : activeBooking;

  const [appointment, setAppointment] = useState<AppointmentDetails | null>(null);
  const [currentToken, setCurrentToken] = useState<{ slotNumber: string; token: number } | null>(null);

  useEffect(() => {
    if (!booking) return;
    let stale = false;
    fetchAppointment(booking.appointmentId)
      .then((res) => {
        if (!stale) setAppointment(res.appointment);
      })
      .catch(() => {
        if (!stale) setAppointment(null);
      });
    fetchAppointmentPreview(booking.doctorId, booking.date, booking.slot)
      .then((res) => {
        if (!stale) setCurrentToken({ slotNumber: res.slotNumber, token: res.currentToken });
      })
      .catch(() => {
        if (!stale) setCurrentToken(null);
      });
    return () => {
      stale = true;
    };
  }, [booking]);

  useQueueSocket(booking?.doctorId ?? "", booking?.slot ?? "", booking?.appointmentId ?? "", {
    onQueueUpdated: () => {
      if (!booking) return;
      fetchAppointmentPreview(booking.doctorId, booking.date, booking.slot)
        .then((res) => setCurrentToken({ slotNumber: res.slotNumber, token: res.currentToken }))
        .catch(() => {});
      fetchAppointment(booking.appointmentId)
        .then((res) => setAppointment(res.appointment))
        .catch(() => {});
    },
    onPaid: () => {
      setAppointment((prev) => (prev ? { ...prev, status: "paid" } : prev));
    },
    onCancelled: () => {
      if (booking) removeStoredBooking(booking.doctorId);
      setCancelled(true);
      setAppointment(null);
      setCurrentToken(null);
    },
  });

  const displayedAppointment = booking && appointment?.id === booking.appointmentId ? appointment : null;

  function cancelAppointment() {
    if (activeBooking) removeStoredBooking(activeBooking.doctorId);
    setCancelled(true);
    setMenuOpen(false);
  }

  if (showSplash) {
    return <ClinicSplash />;
  }

  if (loadState === "loading") {
    return (
      <div className="booking-page">
        <div className="bk-container" style={{ textAlign: "center", paddingTop: 80 }}>
          <Loader2 className="animate-spin" size={28} style={{ color: "#FB2C36" }} />
        </div>
      </div>
    );
  }

  if (loadState === "error" || !clinic) {
    return (
      <div className="booking-page">
        <div className="bk-container">
          <div className="bk-wait-banner">
            <AlertCircle size={16} aria-hidden="true" /> {loadError || "Something went wrong."}
          </div>
        </div>
      </div>
    );
  }

  const clinicPhoto = clinic.photos[0];
  const directionsHref =
    clinic.googleBusinessLink ||
    `https://www.google.com/maps/search/?api=1&query=${clinic.latitude},${clinic.longitude}`;

  return (
    <div className="booking-page">
      <div className="bk-container">
        {displayedAppointment && (
          <>
            <div className="ch-section-row">
              <div className="ch-section-title">Upcoming Appointments</div>
              <span className="ch-view-all">View all</span>
            </div>

            <div className="ch-appt-card">
              <div className="ch-appt-top">
                <div className="ch-appt-token-box">
                  <div className="ch-appt-token-label">Your Token</div>
                  <div className="ch-appt-token-num">{displayedAppointment.slotNumber} {displayedAppointment.tokenNumber}</div>
                </div>
                <div className="ch-appt-info">
                  <div className="ch-appt-doctor-name">{displayedAppointment.doctor.name}</div>
                  <div className="ch-appt-tags">{displayedAppointment.slot}</div>
                </div>
                <div className="ch-appt-menu-wrap">
                  <button
                    type="button"
                    className="ch-appt-menu"
                    aria-label="More options"
                    onClick={() => setMenuOpen((v) => !v)}
                  >
                    <MoreVertical size={18} aria-hidden="true" />
                  </button>
                  {menuOpen && (
                    <div className="ch-appt-dropdown">
                      <button type="button" className="ch-appt-dropdown-item" onClick={cancelAppointment}>
                        <XCircle size={15} aria-hidden="true" /> Cancel Appointment
                      </button>
                    </div>
                  )}
                </div>
              </div>

              <div className="ch-appt-divider" />

              <div className="ch-appt-datetime">
                <Calendar size={14} aria-hidden="true" />
                <span>Estimated Date &amp; Time:</span>
              </div>
              <div className="ch-appt-datetime-value">
                {dateInfo(0).dmy} | {displayedAppointment.estimatedTime}
              </div>

              <div className="ch-appt-current-token">
                <Layers size={14} aria-hidden="true" />
                Current Token <strong>{currentToken ? `${currentToken.slotNumber} ${currentToken.token}` : "—"}</strong>
              </div>
            </div>
          </>
        )}

        <div className="ch-section-title" style={{ marginTop: booking ? 28 : 0, marginBottom: 16 }}>
          Doctors at this Clinic
        </div>

        <div className="ch-doctor-list">
          {doctors.map((doc) => {
            const onDuty = doc.doctorAvailable && doc.activeStatus === "active";
            return (
              <div key={doc.id} className="ch-doctor-card">
                <div className="ch-doctor-photo">
                  {clinicPhoto && (
                    <Image
                      src={clinicPhoto}
                      alt={`${clinic.clinicName} interior`}
                      fill
                      priority
                      sizes="(max-width: 560px) 100vw, 560px"
                      style={{ objectFit: "cover" }}
                    />
                  )}
                  <span className={`ch-duty-badge${onDuty ? " on" : " off"}`}>
                    <span className="ch-duty-dot" aria-hidden="true" /> {onDuty ? "ON" : "OFF"}
                  </span>
                </div>
                <div className="ch-doctor-body">
                  <div className="ch-doctor-name">
                    {doc.name}
                    {doc.services.length > 0 ? ` · ${doc.services.join(", ")}` : ""}
                  </div>
                  <div className="ch-doctor-row">
                    <Hospital size={14} aria-hidden="true" /> {clinic.clinicName}
                  </div>
                  <div className="ch-doctor-row ch-doctor-row-wrap">
                    <MapPin size={14} aria-hidden="true" />
                    <span>
                      {clinic.address}{" "}
                      <a href={directionsHref} target="_blank" rel="noopener noreferrer" className="ch-link">
                        Get Direction
                      </a>
                    </span>
                  </div>
                  <Link href={`/d/${doc.id}?clinicId=${clinicId}`} className="btn btn-primary ch-book-btn">
                    <Calendar size={16} aria-hidden="true" /> Book Appointment
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
