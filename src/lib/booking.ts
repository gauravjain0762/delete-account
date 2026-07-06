export interface StoredBooking {
  appointmentId: string;
  phone: string;
  tokenNumber: number;
  slotNumber: string;
  slot: string;
  date: string;
  doctorId: string;
}

export function bookingKey(doctorId: string): string {
  return `qt_${doctorId}`;
}

export function parseStoredBooking(raw: string | null): StoredBooking | null {
  if (!raw) return null;
  try {
    const saved = JSON.parse(raw) as StoredBooking;
    const today = new Date().toLocaleDateString("en-CA");
    if (saved.date !== today) return null;
    return saved;
  } catch {
    return null;
  }
}

export function saveStoredBooking(booking: StoredBooking): void {
  try {
    localStorage.setItem(bookingKey(booking.doctorId), JSON.stringify(booking));
  } catch {
    // ignore storage failures
  }
}

export function removeStoredBooking(doctorId: string): void {
  try {
    localStorage.removeItem(bookingKey(doctorId));
  } catch {
    // ignore
  }
}
