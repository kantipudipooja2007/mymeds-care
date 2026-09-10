import { useMemo, useState } from "react";
import Header from "./Header";
import ProgressRing from "./ProgressRing";
import StatCard from "./StatCard";
import MedicineCard from "./MedicineCard";
import AddMedicineModal from "./AddMedicineModal";
import { PATIENT, TIME_SLOTS, generateSchedule, nextId } from "../data";

export default function Dashboard() {
  const [medicines, setMedicines] = useState(() => generateSchedule());
  const [showModal, setShowModal] = useState(false);

  const stats = useMemo(() => {
    const total = medicines.length;
    const taken = medicines.filter((m) => m.status === "taken").length;
    const missed = medicines.filter((m) => m.status === "missed").length;
    const upcoming = medicines.filter((m) => m.status === "upcoming").length;
    const percent = total ? Math.round((taken / total) * 100) : 0;
    return { total, taken, missed, upcoming, percent };
  }, [medicines]);

  const toggle = (id) =>
    setMedicines((prev) =>
      prev.map((m) =>
        m.id === id ? { ...m, status: m.status === "taken" ? "upcoming" : "taken" } : m,
      ),
    );

  const save = (med) => {
    setMedicines((prev) => [...prev, { ...med, id: nextId(), status: "upcoming" }]);
    setShowModal(false);
  };

  return (
    <div className="mt-app">
      <div className="mt-wrap">
        <Header patient={PATIENT} onAdd={() => setShowModal(true)} />

        <section className="mt-overview">
          <div className="mt-card mt-ring-card">
            <ProgressRing percent={stats.percent} />
            <div className="mt-ring-label">Today&apos;s doses taken</div>
          </div>
          <div className="mt-stats">
            <StatCard icon="💊" label="Total doses today" value={stats.total} color="#3D7DF6" />
            <StatCard icon="✅" label="Taken" value={stats.taken} color="#22C08D" />
            <StatCard icon="⏳" label="Upcoming" value={stats.upcoming} color="#FFB020" />
            <StatCard icon="⚠️" label="Missed" value={stats.missed} color="#FF6B6B" />
          </div>
        </section>

        <h2 className="mt-section-title">Today&apos;s schedule</h2>

        {medicines.length === 0 ? (
          <div className="mt-empty">
            <strong>No medicines yet</strong>
            Tap “+ Add Medicine” to add your first reminder and we&apos;ll keep track of it for you.
          </div>
        ) : (
          TIME_SLOTS.map((slot) => {
            const list = medicines.filter((m) => m.slot === slot.key);
            if (list.length === 0) return null;
            return (
              <div key={slot.key}>
                <h3 className="mt-group-title">
                  <span>{slot.icon}</span> {slot.key} <small>{slot.time}</small>
                </h3>
                <div className="mt-med-list">
                  {list.map((m) => (
                    <MedicineCard key={m.id} medicine={m} onToggle={toggle} />
                  ))}
                </div>
              </div>
            );
          })
        )}
      </div>

      <footer className="mt-footer">
        MediTrack — helping you and your loved ones never miss a dose.
      </footer>

      {showModal && <AddMedicineModal onClose={() => setShowModal(false)} onSave={save} />}
    </div>
  );
}
