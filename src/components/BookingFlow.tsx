"use client";

import { useEffect, useMemo, useState, useSyncExternalStore, useId, FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, User, Phone, Activity, CheckCircle2, Loader2, Check, Home, AlertCircle, ChevronDown, ArrowLeft, Lightbulb } from "lucide-react";
import {
  fetchClinic,
  fetchDoctorSlots,
  fetchAppointmentPreview,
  fetchFreeFollowupStatus,
  bookAppointment,
  fetchAppointment,
  type ApiDoctor,
  type ApiClinic,
  type AppointmentDetails,
} from "@/lib/api";
import { bookingKey, parseStoredBooking, saveStoredBooking, removeStoredBooking, markClinicSplashShown, type StoredBooking } from "@/lib/booking";
import { useQueueSocket } from "@/lib/socket";
import { dateInfo, dateInfoFromIso } from "@/lib/dateUtils";
import "@/app/booking.css";

const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=app.queuetoken&hl=en";

interface Preview {
  slotNumber: string;
  yourToken: number;
  currentToken: number;
  estimatedTime: string;
}

function subscribeNoop() {
  return () => {};
}
function getServerSnapshot(): string | null {
  return null;
}

export default function BookingFlow({ doctorId, clinicId }: { doctorId: string; clinicId: string }) {
  const today = useMemo(() => dateInfo(0), []);
  const homeHref = clinicId ? `/c/${clinicId}` : "/";

  const rawStored = useSyncExternalStore(
    subscribeNoop,
    () => {
      try {
        return localStorage.getItem(bookingKey(doctorId));
      } catch {
        return null;
      }
    },
    getServerSnapshot
  );
  const storedBooking = useMemo(() => parseStoredBooking(rawStored), [rawStored]);

  // undefined = defer to storage; null/record = this session has explicitly overridden storage
  const [sessionBooking, setSessionBooking] = useState<StoredBooking | null | undefined>(undefined);
  const activeBooking = sessionBooking !== undefined ? sessionBooking : storedBooking;

  const [appointment, setAppointment] = useState<AppointmentDetails | null>(null);
  const [appointmentError, setAppointmentError] = useState("");

  useEffect(() => {
    if (!activeBooking) return;
    let cancelled = false;
    Promise.allSettled([
      fetchAppointment(activeBooking.appointmentId),
      fetchAppointmentPreview(activeBooking.doctorId, activeBooking.date, activeBooking.slot),
    ]).then(([apptResult, previewResult]) => {
      if (cancelled) return;
      if (apptResult.status === "rejected") {
        removeStoredBooking(doctorId);
        setSessionBooking(null);
        setAppointmentError(apptResult.reason instanceof Error ? apptResult.reason.message : "Could not load your appointment.");
        return;
      }
      const appt = apptResult.value.appointment;
      const currentToken = previewResult.status === "fulfilled" ? previewResult.value.currentToken : null;
      const turnReached = currentToken !== null && currentToken >= appt.tokenNumber;
      if (appt.status === "cancelled" || turnReached) {
        removeStoredBooking(doctorId);
        setSessionBooking(null);
        return;
      }
      setAppointment(appt);
    });
    return () => {
      cancelled = true;
    };
  }, [activeBooking, doctorId]);

  useQueueSocket(doctorId, activeBooking?.slot ?? "", activeBooking?.appointmentId ?? "", {
    onQueueUpdated: () => {
      if (!activeBooking) return;
      Promise.allSettled([
        fetchAppointment(activeBooking.appointmentId),
        fetchAppointmentPreview(activeBooking.doctorId, activeBooking.date, activeBooking.slot),
      ]).then(([apptResult, previewResult]) => {
        if (apptResult.status !== "fulfilled") return;
        const appt = apptResult.value.appointment;
        const currentToken = previewResult.status === "fulfilled" ? previewResult.value.currentToken : null;
        const turnReached = currentToken !== null && currentToken >= appt.tokenNumber;
        if (appt.status === "cancelled" || turnReached) {
          removeStoredBooking(doctorId);
          setSessionBooking(null);
          return;
        }
        setAppointment(appt);
      });
    },
    onPaid: () => {
      setAppointment((prev) => (prev ? { ...prev, status: "paid" } : prev));
    },
    onCancelled: () => {
      removeStoredBooking(doctorId);
      setSessionBooking(null);
      setAppointment(null);
    },
  });

  const [loadState, setLoadState] = useState<"loading" | "error" | "ready">("loading");
  const [loadError, setLoadError] = useState("");
  const [clinic, setClinic] = useState<ApiClinic | null>(null);
  const [doctor, setDoctor] = useState<ApiDoctor | null>(null);
  const [activeDate, setActiveDate] = useState(today);
  const [slotOptions, setSlotOptions] = useState<string[]>([]);
  const [timeSlot, setTimeSlot] = useState("");

  const [preview, setPreview] = useState<Preview | null>(null);
  const [previewSlot, setPreviewSlot] = useState<string | null>(null);
  const previewLoading = !!timeSlot && previewSlot !== timeSlot;

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [formErrors, setFormErrors] = useState<{ name?: string; phone?: string }>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [freeFollowupResult, setFreeFollowupResult] = useState(false);

  const nameId = useId();
  const phoneId = useId();

  const phoneReady = phone.length === 10;
  const freeFollowup = phoneReady && freeFollowupResult;

  useEffect(() => {
    if (activeBooking || !phoneReady) return;
    let cancelled = false;
    const timer = setTimeout(() => {
      fetchFreeFollowupStatus(doctorId, phone, activeDate.iso)
        .then((res) => {
          if (cancelled) return;
          setFreeFollowupResult(res.freeFollowup);
        })
        .catch(() => {
          if (cancelled) return;
          setFreeFollowupResult(false);
        });
    }, 450);
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [activeBooking, doctorId, phone, activeDate.iso, phoneReady]);

  useEffect(() => {
    if (activeBooking || !clinicId) return;
    let cancelled = false;
    Promise.all([fetchClinic(clinicId), fetchDoctorSlots(doctorId, today.iso)])
      .then(([clinicRes, slotsRes]) => {
        if (cancelled) return;
        const foundDoctor = clinicRes.doctors.find((d) => d.id === doctorId) ?? null;
        if (!foundDoctor) {
          setLoadState("error");
          setLoadError("Doctor not found at this clinic.");
          return;
        }
        setClinic(clinicRes.clinic);
        setDoctor(foundDoctor);
        const sortedDays = [...slotsRes.slots].sort((a, b) => a.date.localeCompare(b.date));
        const nextAvailable = sortedDays.find((s) => s.availableSlots.length > 0);
        if (nextAvailable) {
          setActiveDate(dateInfoFromIso(nextAvailable.date));
          setSlotOptions(nextAvailable.availableSlots);
          setTimeSlot(nextAvailable.availableSlots[0] ?? "");
        } else {
          const todayEntry = sortedDays.find((s) => s.date === today.iso);
          setActiveDate(today);
          setSlotOptions(todayEntry?.availableSlots ?? []);
          setTimeSlot("");
        }
        setLoadState("ready");
      })
      .catch((err: Error) => {
        if (cancelled) return;
        setLoadState("error");
        setLoadError(err.message || "Failed to load booking details.");
      });
    return () => {
      cancelled = true;
    };
  }, [activeBooking, clinicId, doctorId, today.iso]);

  useEffect(() => {
    if (activeBooking || !timeSlot) return;
    let cancelled = false;
    fetchAppointmentPreview(doctorId, activeDate.iso, timeSlot)
      .then((res) => {
        if (cancelled) return;
        setPreview({
          slotNumber: res.slotNumber,
          yourToken: res.yourToken,
          currentToken: res.currentToken,
          estimatedTime: res.estimatedTime,
        });
        setPreviewSlot(timeSlot);
      })
      .catch(() => {
        if (cancelled) return;
        setPreview(null);
        setPreviewSlot(timeSlot);
      });
    return () => {
      cancelled = true;
    };
  }, [activeBooking, doctorId, timeSlot, activeDate.iso]);

  function confirmBooking(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const errs: { name?: string; phone?: string } = {};
    const phoneDigits = phone.replace(/\D/g, "");
    if (!name.trim()) errs.name = "Patient name is required.";
    if (phoneDigits.length !== 10) errs.phone = "Enter a valid 10-digit mobile number.";
    if (Object.keys(errs).length > 0) {
      setFormErrors(errs);
      return;
    }
    setFormErrors({});
    setSubmitError("");
    setSubmitting(true);

    bookAppointment({
      doctorId,
      date: activeDate.iso,
      slot: timeSlot,
      fullName: name.trim(),
      phone: phoneDigits,
      problem: "",
      paymentMethod: "cash",
    })
      .then((res) => {
        const stored: StoredBooking = {
          appointmentId: res.appointment._id,
          phone: phoneDigits,
          tokenNumber: res.tokenNumber,
          slotNumber: res.slotNumber,
          slot: timeSlot,
          date: activeDate.iso,
          doctorId,
        };
        saveStoredBooking(stored);
        setSessionBooking(stored);
      })
      .catch((err: Error) => {
        setSubmitError(err.message || "Failed to book appointment.");
      })
      .finally(() => setSubmitting(false));
  }

  if (activeBooking) {
    if (!appointment) {
      return (
        <div className="booking-page">
          <div className="bk-container" style={{ textAlign: "center", paddingTop: 80 }}>
            {appointmentError ? (
              <div className="bk-wait-banner">
                <AlertCircle size={16} aria-hidden="true" /> {appointmentError}
              </div>
            ) : (
              <Loader2 className="animate-spin" size={28} style={{ color: "#FB2C36" }} />
            )}
          </div>
        </div>
      );
    }

    return (
      <div className="booking-page">
        <div className="bk-container">
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open QueueToken app"
            className="bk-confirm-logo"
          >
            <Image src="/queuetoken-logo.png" alt="QueueToken" width={40} height={40} priority />
          </a>

          <div className="bk-confirm-icon">
            <div className="bk-confirm-icon-inner">
              <Check size={30} aria-hidden="true" className="bk-confirm-check" />
            </div>
          </div>

          <h1 className="bk-title bk-confirm-title">Booking Confirmed!</h1>
          <p className="bk-subtitle bk-confirm-subtitle">Your appointment has been successfully booked</p>

          <div className="bk-card bk-confirm-card">
            <div className="bk-confirm-token-label">Your Token Number</div>
            <div className="bk-confirm-token-num">{appointment.slotNumber} {appointment.tokenNumber}</div>

            <div className="bk-confirm-divider" />

            <div className="bk-confirm-row">
              <span>Date</span>
              <strong>{dateInfoFromIso(appointment.date).dmy}</strong>
            </div>
            <div className="bk-confirm-row">
              <span>Estimated Time</span>
              <strong>{appointment.estimatedTime}</strong>
            </div>
            <div className="bk-confirm-row">
              <span>Doctor Name</span>
              <strong>{appointment.doctor.name}</strong>
            </div>
            <div className="bk-confirm-row">
              <span>Clinic Name</span>
              <strong>{appointment.clinic.clinicName}</strong>
            </div>
            <div className="bk-confirm-row bk-confirm-row-address">
              <span>Address</span>
              <strong>{appointment.clinic.address}</strong>
            </div>
          </div>

          <Link
            href={homeHref}
            className="btn btn-secondary"
            onClick={() => {
              if (clinicId) markClinicSplashShown(clinicId);
            }}
          >
            <Home size={16} aria-hidden="true" /> Back to Home
          </Link>

          <p className="bk-app-download">
            Download our app {" "}
            <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer">
              to get more facilites
            </a>
          </p>

          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Get it on Google Play"
            className="bk-play-badge bk-play-badge-centered"
          >
            <span className="bk-play-badge-icon" aria-hidden="true" />
            <span className="bk-play-badge-text">
              <span className="bk-play-badge-eyebrow">GET IT ON</span>
              <span className="bk-play-badge-title">Google Play</span>
            </span>
          </a>
        </div>
      </div>
    );
  }

  if (!clinicId) {
    return (
      <div className="booking-page">
        <div className="bk-container">
          <div className="bk-wait-banner">
            <AlertCircle size={16} aria-hidden="true" /> Missing clinic reference — open this page via a clinic link.
          </div>
        </div>
      </div>
    );
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

  if (loadState === "error" || !doctor || !clinic) {
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

  return (
    <div className="booking-page">
      <div className="bk-container">
        <div className="bk-header-row">
          <Link href={homeHref} aria-label="Go back" className="bk-back-btn">
            <ArrowLeft size={18} aria-hidden="true" />
          </Link>
          <div className="bk-header-title">Book Appointment</div>
        </div>

        <div className="bk-section-heading">Fill Your Details</div>

        <div className="bk-wait-banner">
          {slotOptions.length === 0 ? (
            <div className="bk-wait-line1">No slots available</div>
          ) : previewLoading || !preview ? (
            <div className="bk-wait-line1">Loading queue status…</div>
          ) : (
            <>
              <div className="bk-wait-line1">
                <Lightbulb size={14} aria-hidden="true" className="bk-wait-icon" /> Your wait list {preview.yourToken}
              </div>
              <div className="bk-wait-line2">Expected appointment time <strong>{preview.estimatedTime}</strong></div>
            </>
          )}
        </div>

        <form onSubmit={confirmBooking} noValidate className="bk-card">
          {submitError && (
            <div className="bk-error" style={{ marginBottom: 14 }} role="alert">
              {submitError}
            </div>
          )}

          <div className="bk-field-row">
            <div className="bk-field">
              <label className="bk-label bk-icon-label">
                <Calendar size={14} aria-hidden="true" /> Date <span aria-hidden="true" style={{ color: "#FB2C36" }}>*</span>
              </label>
              <div className="bk-readonly">{activeDate.displayLabel}</div>
            </div>
            <div className="bk-field">
              <label htmlFor="bk-time-slot" className="bk-label bk-icon-label">
                <Clock size={14} aria-hidden="true" /> Time Slot <span aria-hidden="true" style={{ color: "#FB2C36" }}>*</span>
              </label>
              <div className="bk-select-wrap">
                {slotOptions.length === 0 ? (
                  <div className="bk-readonly">No slots available</div>
                ) : (
                  <>
                    <select
                      id="bk-time-slot"
                      className="bk-select"
                      value={timeSlot}
                      onChange={(e) => setTimeSlot(e.target.value)}
                    >
                      {slotOptions.map((slot) => (
                        <option key={slot} value={slot}>{slot}</option>
                      ))}
                    </select>
                    <ChevronDown size={16} className="bk-select-chevron" aria-hidden="true" />
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="bk-field">
            <label htmlFor={nameId} className="bk-label bk-icon-label">
              <User size={14} aria-hidden="true" /> Patient Name <span aria-hidden="true" style={{ color: "#FB2C36" }}>*</span>
            </label>
            <input
              id={nameId}
              type="text"
              className="bk-input"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (formErrors.name) setFormErrors((p) => ({ ...p, name: undefined }));
              }}
              placeholder="Patient's full name"
              aria-invalid={!!formErrors.name}
              aria-describedby={formErrors.name ? `${nameId}-error` : undefined}
            />
            {formErrors.name && <p id={`${nameId}-error`} role="alert" className="bk-error">{formErrors.name}</p>}
          </div>

          <div className="bk-field">
            <label htmlFor={phoneId} className="bk-label bk-icon-label">
              <Phone size={14} aria-hidden="true" /> Phone Number <span aria-hidden="true" style={{ color: "#FB2C36" }}>*</span>
            </label>
            <div className="bk-phone-row">
              <span className="bk-phone-prefix">+91</span>
              <input
                id={phoneId}
                type="tel"
                inputMode="numeric"
                maxLength={10}
                className="bk-input"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value.replace(/\D/g, "").slice(0, 10));
                  if (formErrors.phone) setFormErrors((p) => ({ ...p, phone: undefined }));
                }}
                placeholder="9876543210"
                aria-invalid={!!formErrors.phone}
                aria-describedby={formErrors.phone ? `${phoneId}-error` : undefined}
              />
            </div>
            {formErrors.phone && <p id={`${phoneId}-error`} role="alert" className="bk-error">{formErrors.phone}</p>}
          </div>

          <div className="bk-field">
            <label className="bk-label bk-icon-label">
              <Activity size={14} aria-hidden="true" /> Free Follow up Days
            </label>
            <div className="bk-readonly">{clinic.freeFollowupDays} days</div>
          </div>

          <button
            type="submit"
            className="btn btn-primary bk-book-btn"
            disabled={submitting || previewLoading || !preview || slotOptions.length === 0}
          >
            <span className="bk-book-btn-label">
              {submitting ? <Loader2 size={16} className="animate-spin" aria-hidden="true" /> : <CheckCircle2 size={16} aria-hidden="true" />}
              {submitting ? "Booking…" : "Book Now"}
            </span>
            {freeFollowup ? <span>Free Follow up</span> : <span>₹{doctor.consultationFee || clinic.consultationFee}</span>}
          </button>
        </form>
      </div>
    </div>
  );
}
