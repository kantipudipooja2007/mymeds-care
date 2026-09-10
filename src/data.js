export const PATIENT = "Rajesh";

export const TIME_SLOTS = [
  { key: "Morning", time: "8:00 AM", icon: "🌅" },
  { key: "Afternoon", time: "1:30 PM", icon: "☀️" },
  { key: "Evening", time: "7:00 PM", icon: "🌇" },
  { key: "Night", time: "10:00 PM", icon: "🌙" },
];

const CATALOG = [
  { name: "Metformin", dosage: "500mg", condition: "Diabetes" },
  { name: "Amlodipine", dosage: "5mg", condition: "Blood pressure" },
  { name: "Atorvastatin", dosage: "10mg", condition: "Cholesterol" },
  { name: "Levothyroxine", dosage: "50mcg", condition: "Thyroid" },
  { name: "Omeprazole", dosage: "20mg", condition: "Acidity" },
  { name: "Losartan", dosage: "50mg", condition: "Blood pressure" },
  { name: "Vitamin D3", dosage: "1000 IU", condition: "Bone health" },
  { name: "Aspirin", dosage: "75mg", condition: "Heart care" },
];

const STATUSES = ["taken", "taken", "upcoming", "upcoming", "missed"];

const pick = (list) => list[Math.floor(Math.random() * list.length)];

let seq = 0;
export const nextId = () => `med-${Date.now()}-${seq++}`;

export function generateSchedule() {
  const pool = [...CATALOG].sort(() => Math.random() - 0.5);
  const count = 5 + Math.floor(Math.random() * 3); // 5-7 doses
  return pool.slice(0, count).map((med) => {
    const slot = pick(TIME_SLOTS);
    return {
      id: nextId(),
      ...med,
      slot: slot.key,
      time: slot.time,
      status: pick(STATUSES),
    };
  });
}
