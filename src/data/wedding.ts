// Central wedding configuration — edit the values here to personalise the invitation.

export const wedding = {
  bride: "Lahiru",
  groom: "Nipuni",
  monogram: { first: "L", second: "N" },
  familiesLine: "Together with their families",
  invitationWording:
  "Together with their families, Lahiru and Nipuni request the pleasure of your company at their wedding celebration.",
  coverWording: "request the pleasure of your company at their wedding celebration",
  blessingMessage:
  "With the blessings of our families, we joyfully invite you to celebrate the beginning of our new journey together.",
  closingMessage: "Your presence will make our special day even more memorable.",
  date: {
    long: "12 December 2026",
    short: "12 · 12 · 2026",
    weekday: "Saturday"
  },
  ceremony: {
    title: "Ceremony",
    subtitle: "Traditional Poruwa ceremony",
    time: "10:00 AM",
    note: "Kandyan rites upon the Poruwa"
  },
  reception: {
    title: "Reception",
    subtitle: "Wedding reception",
    time: "12:30 PM",
    note: "Lunch and celebrations follow"
  },
  // Countdown + calendar timings (Sri Lanka Standard Time, UTC+05:30)
  startISO: "2026-12-12T10:00:00+05:30",
  endISO: "2026-12-12T15:00:00+05:30",
  venue: {
    name: "The Grand Kandyan",
    address: "No. 89, Peradeniya Road, Kandy, Sri Lanka"
  },
  dressCode: {
    title: "Traditional or Formal Attire",
    description:
    "Join us in the spirit of a Kandyan celebration — graceful traditional wear or elegant formal attire.",
    ladies: "Osariya, saree, or an elegant formal dress",
    gentlemen: "National dress, or a formal suit",
    palette: [
    { name: "Ivory", hex: "#FBF6EC" },
    { name: "Champagne", hex: "#E8D3A2" },
    { name: "Blush", hex: "#E9C9C3" },
    { name: "Maroon", hex: "#7A2533" }]

  },
  // Place your audio file at /public/audio/wedding-music.mp3 (missing files are handled gracefully)
  musicSrc: "/audio/wedding-music.mp3",
  images: {
    couple: "/8cea3d5a-72b2-485b-8494-6fdfb7228380.jpg",

    floralBackground: "/47590fce-0df7-46ce-a7f5-e3ae7a74576b.jpg"

  }
};

export const schedule = [
{ time: "9:30 AM", title: "Guest arrival", detail: "Welcome with traditional drummers", highlight: false },
{ time: "10:00 AM", title: "Traditional wedding ceremony", detail: "Poruwa rites at the auspicious time", highlight: true },
{ time: "11:30 AM", title: "Photography and congratulations", detail: "Share your blessings with the couple", highlight: false },
{ time: "12:30 PM", title: "Wedding reception", detail: "Toasts, music and dancing", highlight: false },
{ time: "1:00 PM", title: "Lunch and celebrations", detail: "A traditional Sri Lankan feast", highlight: false }];


export const navSections = [
{ id: "message", label: "Invitation" },
{ id: "countdown", label: "Countdown" },
{ id: "details", label: "Details" },
{ id: "schedule", label: "Schedule" },
{ id: "venue", label: "Venue" },
{ id: "attire", label: "Attire" }];