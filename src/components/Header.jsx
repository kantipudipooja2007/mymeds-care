import Logo from "./Logo";

function greeting() {
  const h = new Date().getHours();
  if (h < 12) return "Good morning";
  if (h < 17) return "Good afternoon";
  return "Good evening";
}

export default function Header({ patient, onAdd }) {
  const today = new Date().toLocaleDateString(undefined, {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="mt-header">
      <Logo size={38} dark />
      <div>
        <h1 className="mt-greet">
          {greeting()}, {patient}
        </h1>
        <p className="mt-date">{today}</p>
      </div>
      <button className="mt-add-btn" onClick={onAdd}>
        + Add Medicine
      </button>
    </header>
  );
}
