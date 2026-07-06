export interface DoctorInfo {
  name: string;
  specialization: string;
  clinicName: string;
  city: string;
  address: string;
  phone: string;
  onDuty: boolean;
  consultationFee: number;
  avgConsultMinutes: number;
  queueAheadNow: number;
  currentTokenServing: number;
  freeFollowupDays: number;
}

export interface SlotOption {
  id: string;
  time: string;
  full: boolean;
}

export interface BookingRecord {
  doctorId: string;
  dateIso: string;
  dateLabel: string;
  time: string;
  token: number;
  currentServing: number;
  patientsAhead: number;
  expectedTimeLabel: string;
  waitListLabel: string;
  name: string;
  phone: string;
  bookedAt: number;
}

const DOCTOR_NAMES = ["Dr. Ramesh Shah", "Dr. Anita Patel", "Dr. Kiran Mehta", "Dr. Priya Nair", "Dr. Sanjay Gupta"];
const SPECIALIZATIONS = ["General Physician", "Dermatologist", "Paediatrician", "ENT Specialist", "Dentist"];
const CITIES = ["Surat", "Ahmedabad", "Vadodara", "Rajkot", "Mumbai"];
const CLINIC_SUFFIXES = ["Clinic", "Care", "Health Center", "Medicare", "Wellness Center"];
const ADDRESSES: Record<string, string> = {
  Surat: "12 Ring Road, Adajan, Surat, Gujarat, India",
  Ahmedabad: "45 CG Road, Navrangpura, Ahmedabad, Gujarat, India",
  Vadodara: "8 Alkapuri Society, Vadodara, Gujarat, India",
  Rajkot: "22 Kalawad Road, Rajkot, Gujarat, India",
  Mumbai: "Silver Plaza, Railway Colony, Santacruz (West), Mumbai, Maharashtra, India",
};
const FOLLOWUP_DAYS = [5, 7, 10, 14];
const SLOT_TIMES = ["09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "04:00 PM", "04:30 PM", "05:00 PM"];

export function hashSeed(str: string): number {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0;
  return h;
}

export function getDoctorInfo(doctorId: string): DoctorInfo {
  const seed = hashSeed(doctorId || "demo");
  const name = DOCTOR_NAMES[seed % DOCTOR_NAMES.length];
  const queueAheadNow = 2 + (seed % 6);
  const city = CITIES[Math.floor(seed / 13) % CITIES.length];
  const lastName = name.replace("Dr. ", "").split(" ").pop() ?? name;
  const phone = `9${String(100000000 + (seed % 900000000)).padStart(9, "0")}`;
  return {
    name,
    specialization: SPECIALIZATIONS[Math.floor(seed / 7) % SPECIALIZATIONS.length],
    clinicName: `${lastName} ${CLINIC_SUFFIXES[Math.floor(seed / 17) % CLINIC_SUFFIXES.length]}`,
    city,
    address: ADDRESSES[city] ?? `${city}, India`,
    phone,
    onDuty: seed % 4 !== 0,
    consultationFee: 200 + (seed % 5) * 50,
    avgConsultMinutes: 8 + (seed % 5) * 2,
    queueAheadNow,
    currentTokenServing: Math.max(1, queueAheadNow - (2 + (seed % 3))),
    freeFollowupDays: FOLLOWUP_DAYS[seed % FOLLOWUP_DAYS.length],
  };
}

export function getClinicDoctorIds(clinicId: string): string[] {
  // Demo: only one doctor per clinic for now. Bump this back to a
  // seed-derived count (2 + seed % 3) once multi-doctor clinics are needed.
  return [`${clinicId || "demo-clinic"}-doc-0`];
}

export function getSlots(seed: number): SlotOption[] {
  return SLOT_TIMES.map((time, i) => ({
    id: `${i}`,
    time,
    full: (seed + i * 3) % 7 === 0,
  }));
}

export function parseTimeToMinutes(time: string): number {
  const m = time.match(/(\d+):(\d+)\s*(AM|PM)/i);
  if (!m) return 0;
  let h = parseInt(m[1], 10);
  const min = parseInt(m[2], 10);
  const ap = m[3].toUpperCase();
  if (ap === "PM" && h !== 12) h += 12;
  if (ap === "AM" && h === 12) h = 0;
  return h * 60 + min;
}

export function minutesToLabel(totalMinutes: number): string {
  const mins = ((totalMinutes % 1440) + 1440) % 1440;
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  const ap = h >= 12 ? "PM" : "AM";
  let h12 = h % 12;
  if (h12 === 0) h12 = 12;
  return `${String(h12).padStart(2, "0")}:${String(m).padStart(2, "0")} ${ap}`;
}

export function computeQueuePreview(doctor: DoctorInfo, slotTime: string) {
  const patientsAhead = doctor.queueAheadNow;
  const token = doctor.currentTokenServing + patientsAhead + 1;
  const expectedTimeLabel = minutesToLabel(parseTimeToMinutes(slotTime) + patientsAhead * doctor.avgConsultMinutes);
  const session = parseTimeToMinutes(slotTime) < 12 * 60 ? "A" : "B";
  const waitListLabel = `${session} ${patientsAhead + 1}`;
  return { patientsAhead, token, expectedTimeLabel, waitListLabel };
}

export function dateInfo(offset: number) {
  const d = new Date();
  d.setDate(d.getDate() + offset);
  const iso = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  const shortLabel = d.toLocaleDateString("en-IN", { weekday: "short", day: "2-digit", month: "short" });
  const weekday = d.toLocaleDateString("en-IN", { weekday: "long" });
  const dmy = `${String(d.getDate()).padStart(2, "0")}/${String(d.getMonth() + 1).padStart(2, "0")}/${d.getFullYear()}`;
  const displayLabel = `${dmy} (${weekday})`;
  return { iso, shortLabel, displayLabel, dmy };
}
