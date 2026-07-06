const API_BASE = "https://api.queuetoken.in";

export interface ApiDoctorSlotRange {
  startTime: string;
  endTime: string;
  _id: string;
}
export interface ApiDoctorAvailability {
  day: string;
  isActive: boolean;
  slots: ApiDoctorSlotRange[];
  _id: string;
}
export interface ApiDoctor {
  id: string;
  name: string;
  profilePhoto: string | null;
  experience: number;
  gender: string;
  rating: number;
  services: string[];
  qualifications: string[];
  doctorAvailable: boolean;
  activeStatus: string;
  availability: ApiDoctorAvailability[];
  maxPatientsPerSlot: number;
  consultationFee: number;
}

export interface ApiClinic {
  id: string;
  clinicName: string;
  about: string;
  address: string;
  city: string;
  state: string;
  consultationFee: number;
  freeFollowupDays: number;
  rating: number;
  latitude: number;
  longitude: number;
  photos: string[];
  googleBusinessLink: string;
}

export interface ClinicResponse {
  success: boolean;
  message?: string;
  clinic: ApiClinic;
  doctors: ApiDoctor[];
}

export interface DoctorSlotsDay {
  date: string;
  day: string;
  availableSlots: string[];
}
export interface DoctorSlotsResponse {
  success: boolean;
  message?: string;
  doctorName: string;
  slots: DoctorSlotsDay[];
}

export interface AppointmentPreviewResponse {
  success: boolean;
  message?: string;
  slotNumber: string;
  currentToken: number;
  yourToken: number;
  estimatedWaitMinutes: number;
  estimatedTime: string;
  freeFollowupDays: number;
}

export interface BookAppointmentPayload {
  doctorId: string;
  date: string;
  slot: string;
  fullName: string;
  phone: string;
  problem: string;
  paymentMethod: string;
}

export interface BookAppointmentResponse {
  success: boolean;
  message?: string;
  slotNumber: string;
  tokenNumber: number;
  expectedTime: string;
  consultationFee: number;
  paymentStatus: string;
  appointment: { _id: string; appointmentId: string; date: string; slot: string; slotTokenNumber: number };
}

export interface AppointmentDetails {
  id: string;
  displayId: string;
  slotNumber: string;
  tokenNumber: number;
  date: string;
  slot: string;
  status: string;
  estimatedTime: string;
  doctor: { name: string; profilePhoto: string | null };
  clinic: { clinicName: string; address: string; city: string };
}

export interface GetAppointmentResponse {
  success: boolean;
  message?: string;
  appointment: AppointmentDetails;
}

async function apiGet<T extends { success: boolean; message?: string }>(path: string): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`);
  const data = (await res.json()) as T;
  if (!res.ok || !data.success) {
    throw new Error(data.message || `Request failed (${res.status})`);
  }
  return data;
}

async function apiPost<T extends { success: boolean; message?: string }>(path: string, body: unknown): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const data = (await res.json()) as T;
  if (!res.ok || !data.success) {
    throw new Error(data.message || `Request failed (${res.status})`);
  }
  return data;
}

export function fetchClinic(clinicId: string): Promise<ClinicResponse> {
  return apiGet<ClinicResponse>(`/api/patient/clinic/${clinicId}`);
}

export function fetchDoctorSlots(doctorId: string, date: string): Promise<DoctorSlotsResponse> {
  return apiGet<DoctorSlotsResponse>(`/api/patient/doctor-slots/${doctorId}?date=${date}`);
}

export function fetchAppointmentPreview(doctorId: string, date: string, slot: string): Promise<AppointmentPreviewResponse> {
  return apiGet<AppointmentPreviewResponse>(
    `/api/patient/appointment-preview/${doctorId}?date=${date}&slot=${encodeURIComponent(slot)}`
  );
}

export function bookAppointment(payload: BookAppointmentPayload): Promise<BookAppointmentResponse> {
  return apiPost<BookAppointmentResponse>("/api/patient/book-appointment", payload);
}

export function fetchAppointment(appointmentId: string): Promise<GetAppointmentResponse> {
  return apiGet<GetAppointmentResponse>(`/api/patient/appointment/${appointmentId}`);
}
