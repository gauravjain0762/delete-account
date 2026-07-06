import { useEffect, useRef } from "react";
import { io, type Socket } from "socket.io-client";

const SOCKET_URL = "https://api.queuetoken.in";

interface QueueUpdatedPayload {
  doctorId: string;
  slot: string;
}
interface AppointmentEventPayload {
  appointmentId: string;
}

interface QueueSocketHandlers {
  onQueueUpdated: () => void;
  onPaid: () => void;
  onCancelled: () => void;
}

export function useQueueSocket(doctorId: string, slot: string, appointmentId: string, handlers: QueueSocketHandlers) {
  const handlersRef = useRef(handlers);
  useEffect(() => {
    handlersRef.current = handlers;
  });

  useEffect(() => {
    if (!doctorId || !appointmentId) return;
    const socket: Socket = io(SOCKET_URL, { auth: {} });

    socket.emit("joinDoctorQueue", doctorId);

    socket.on("queueUpdated", (data: QueueUpdatedPayload) => {
      if (data.doctorId === doctorId && data.slot === slot) handlersRef.current.onQueueUpdated();
    });
    socket.on("appointmentPaid", (data: AppointmentEventPayload) => {
      if (data.appointmentId === appointmentId) handlersRef.current.onPaid();
    });
    socket.on("appointmentCancelled", (data: AppointmentEventPayload) => {
      if (data.appointmentId === appointmentId) handlersRef.current.onCancelled();
    });

    const disconnect = () => socket.disconnect();
    window.addEventListener("beforeunload", disconnect);

    return () => {
      window.removeEventListener("beforeunload", disconnect);
      socket.disconnect();
    };
  }, [doctorId, slot, appointmentId]);
}
