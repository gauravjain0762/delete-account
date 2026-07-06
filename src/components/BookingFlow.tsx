"use client";

import { useState, useSyncExternalStore, useMemo, useId, FormEvent } from "react";
import Link from "next/link";
import { Calendar, Clock, User, Phone, Repeat, CheckCircle2, Loader2, Check, Home } from "lucide-react";
import { getDoctorInfo, getSlots, computeQueuePreview, dateInfo, hashSeed, getClinicIdFromDoctorId, type BookingRecord } from "@/lib/queueMock";
import "@/app/booking.css";

type Step = "details" | "token";

function subscribeNoop() {
  return () => {};
}

function getServerSnapshot(): string | null {
  return null;
}

export default function BookingFlow({ doctorId }: { doctorId: string }) {
  const doctor = useMemo(() => getDoctorInfo(doctorId), [doctorId]);
  const slots = useMemo(() => getSlots(hashSeed(doctorId || "demo")), [doctorId]);
  const storageKey = `qt_booking_${doctorId}`;
  const homeHref = useMemo(() => {
    const clinicId = getClinicIdFromDoctorId(doctorId);
    return clinicId ? `/c/${clinicId}` : "/";
  }, [doctorId]);

  const rawStored = useSyncExternalStore(
    subscribeNoop,
    () => {
      try {
        return localStorage.getItem(storageKey);
      } catch {
        return null;
      }
    },
    getServerSnapshot
  );

  const storedBooking = useMemo<BookingRecord | null>(() => {
    if (!rawStored) return null;
    try {
      const parsed: BookingRecord = JSON.parse(rawStored);
      const today = dateInfo(0);
      if (parsed.doctorId === doctorId && parsed.dateIso === today.iso) return parsed;
    } catch {
      // malformed storage — treat as no existing booking
    }
    return null;
  }, [rawStored, doctorId]);

  // undefined = defer to storage; null/record = this session has explicitly overridden storage
  const [sessionBooking, setSessionBooking] = useState<BookingRecord | null | undefined>(undefined);
  const booking = sessionBooking !== undefined ? sessionBooking : storedBooking;
  const step: Step = booking ? "token" : "details";

  const firstAvailableSlot = slots.find((s) => !s.full)?.time ?? slots[0]?.time ?? "";
  const [timeSlot, setTimeSlot] = useState(firstAvailableSlot);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [formErrors, setFormErrors] = useState<{ name?: string; phone?: string }>({});
  const [submitting, setSubmitting] = useState(false);

  const nameId = useId();
  const phoneId = useId();

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
    setSubmitting(true);

    const { iso, shortLabel } = dateInfo(0);
    const { token, patientsAhead, expectedTimeLabel, waitListLabel } = computeQueuePreview(doctor, timeSlot);
    const record: BookingRecord = {
      doctorId,
      dateIso: iso,
      dateLabel: shortLabel,
      time: timeSlot,
      token,
      currentServing: doctor.currentTokenServing,
      patientsAhead,
      expectedTimeLabel,
      waitListLabel,
      name: name.trim(),
      phone: phoneDigits,
      bookedAt: Date.now(),
    };

    try {
      localStorage.setItem(storageKey, JSON.stringify(record));
    } catch {}
    setSubmitting(false);
    setSessionBooking(record);
  }

  if (step === "details") {
    const today = dateInfo(0);
    const { expectedTimeLabel, waitListLabel } = computeQueuePreview(doctor, timeSlot);

    return (
      <div className="booking-page">
        <div className="bk-container">
          <div className="bk-header-row">
            <div className="bk-header-titles">
              <div className="bk-header-title">Book Appointment</div>
              <div className="bk-header-sub">with {doctor.name}</div>
            </div>
          </div>

          <div className="bk-wait-banner">
            <div className="bk-wait-line1">Your wait list {waitListLabel}</div>
            <div className="bk-wait-line2">Expected appointment time <strong>{expectedTimeLabel}</strong></div>
          </div>

          <div className="bk-section-heading">Fill Patient Details</div>

          <form onSubmit={confirmBooking} noValidate className="bk-card">
            <div className="bk-field-row">
              <div className="bk-field">
                <label className="bk-label bk-icon-label">
                  <Calendar size={14} aria-hidden="true" /> Date <span aria-hidden="true" style={{ color: "#FB2C36" }}>*</span>
                </label>
                <div className="bk-readonly">{today.displayLabel}</div>
              </div>
              <div className="bk-field">
                <label htmlFor="bk-time-slot" className="bk-label bk-icon-label">
                  <Clock size={14} aria-hidden="true" /> Time Slot <span aria-hidden="true" style={{ color: "#FB2C36" }}>*</span>
                </label>
                <div className="bk-select-wrap">
                  <select
                    id="bk-time-slot"
                    className="bk-select"
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                  >
                    {slots.map((slot) => (
                      <option key={slot.id} value={slot.time} disabled={slot.full}>
                        {slot.time}{slot.full ? " (Full)" : ""}
                      </option>
                    ))}
                  </select>
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
                <Repeat size={14} aria-hidden="true" /> Free Follow up Days
              </label>
              <div className="bk-readonly">{doctor.freeFollowupDays} days</div>
            </div>

            <button type="submit" className="btn btn-primary bk-book-btn" disabled={submitting}>
              <span className="bk-book-btn-label">
                {submitting ? <Loader2 size={16} className="animate-spin" aria-hidden="true" /> : <CheckCircle2 size={16} aria-hidden="true" />}
                {submitting ? "Booking…" : "Book Now"}
              </span>
              <span>₹{doctor.consultationFee}</span>
            </button>
          </form>
        </div>
      </div>
    );
  }

  if (step === "token" && booking) {
    const { dmy } = dateInfo(0);
    return (
      <div className="booking-page">
        <div className="bk-container">
          <div className="bk-confirm-icon">
            <div className="bk-confirm-icon-inner">
              <Check size={30} aria-hidden="true" />
            </div>
          </div>

          <h1 className="bk-title bk-confirm-title">Booking Confirmed!</h1>
          <p className="bk-subtitle bk-confirm-subtitle">Your appointment has been successfully booked</p>

          <div className="bk-card bk-confirm-card">
            <div className="bk-confirm-token-label">Your Token Number</div>
            <div className="bk-confirm-token-num">{booking.waitListLabel}</div>

            <div className="bk-confirm-divider" />

            <div className="bk-confirm-row">
              <span>Date</span>
              <strong>{dmy}</strong>
            </div>
            <div className="bk-confirm-row">
              <span>Estimated Time</span>
              <strong>{booking.expectedTimeLabel}</strong>
            </div>
            <div className="bk-confirm-row">
              <span>Doctor Name</span>
              <strong>{doctor.name}</strong>
            </div>
            <div className="bk-confirm-row">
              <span>Clinic Name</span>
              <strong>{doctor.clinicName}</strong>
            </div>
            <div className="bk-confirm-row bk-confirm-row-address">
              <span>Address</span>
              <strong>{doctor.address}</strong>
            </div>
          </div>

          <Link href={homeHref} className="btn btn-secondary">
            <Home size={16} aria-hidden="true" /> Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return null;
}
