import { useState } from "react";
import { TIME_SLOTS } from "../data";

export default function AddMedicineModal({ onClose, onSave }) {
  const [name, setName] = useState("");
  const [dosage, setDosage] = useState("");
  const [condition, setCondition] = useState("");
  const [slot, setSlot] = useState(TIME_SLOTS[0].key);
  const [error, setError] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setError("Please enter the medicine name.");
      return;
    }
    const chosen = TIME_SLOTS.find((s) => s.key === slot);
    onSave({
      name: name.trim(),
      dosage: dosage.trim(),
      condition: condition.trim(),
      slot: chosen.key,
      time: chosen.time,
    });
  };

  return (
    <div className="mt-overlay" onClick={onClose}>
      <div className="mt-modal" onClick={(e) => e.stopPropagation()}>
        <h2>Add a medicine</h2>
        <form onSubmit={submit}>
          <label className="mt-field">
            Medicine name
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Metformin"
              autoFocus
            />
          </label>
          {error && <p className="mt-error">{error}</p>}
          <label className="mt-field">
            Dosage
            <input
              value={dosage}
              onChange={(e) => setDosage(e.target.value)}
              placeholder="e.g. 500mg"
            />
          </label>
          <label className="mt-field">
            What is it for?
            <input
              value={condition}
              onChange={(e) => setCondition(e.target.value)}
              placeholder="e.g. Diabetes"
            />
          </label>
          <label className="mt-field">
            When do you take it?
            <select value={slot} onChange={(e) => setSlot(e.target.value)}>
              {TIME_SLOTS.map((s) => (
                <option key={s.key} value={s.key}>
                  {s.key} {s.time}
                </option>
              ))}
            </select>
          </label>
          <div className="mt-modal-actions">
            <button type="button" className="mt-cancel" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="mt-save">
              Save reminder
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
