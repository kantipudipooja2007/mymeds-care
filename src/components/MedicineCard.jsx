const LABELS = { taken: "Taken", missed: "Missed", upcoming: "Upcoming" };

export default function MedicineCard({ medicine, onToggle }) {
  const taken = medicine.status === "taken";

  return (
    <article className="mt-med">
      <div>
        <h3 className="mt-med-name">{medicine.name}</h3>
        <p className="mt-med-meta">
          {[medicine.dosage, medicine.condition].filter(Boolean).join(" · ")}
        </p>
        <p className="mt-med-meta">🕒 {medicine.time}</p>
      </div>
      <div className="mt-med-right">
        <span className={`mt-badge ${medicine.status}`}>{LABELS[medicine.status]}</span>
        <button
          className={taken ? "mt-toggle done" : "mt-toggle"}
          onClick={() => onToggle(medicine.id)}
        >
          {taken ? "✓ Taken" : "Mark as taken"}
        </button>
      </div>
    </article>
  );
}
