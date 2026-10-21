import { wedding } from "../data/wedding";

const fullAddress = `${wedding.venue.name}, ${wedding.venue.address}`;

export function getDirectionsUrl(): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(fullAddress)}`;
}

export function getMapEmbedUrl(): string {
  return `https://maps.google.com/maps?q=${encodeURIComponent(fullAddress)}&z=14&output=embed`;
}

function toCalendarStamp(iso: string): string {
  return new Date(iso).toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
}

export function getGoogleCalendarUrl(): string {
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: `Wedding of ${wedding.bride} & ${wedding.groom}`,
    dates: `${toCalendarStamp(wedding.startISO)}/${toCalendarStamp(wedding.endISO)}`,
    details: `${wedding.invitationWording}\n\nCeremony: ${wedding.ceremony.time}\nReception: ${wedding.reception.time}\nDress code: ${wedding.dressCode.title}`,
    location: fullAddress,
    ctz: "Asia/Colombo"
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}