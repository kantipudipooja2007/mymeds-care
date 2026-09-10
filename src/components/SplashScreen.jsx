import Logo from "./Logo";

const HIGHLIGHTS = [
  { icon: "⏰", text: "Timely reminders" },
  { icon: "👆", text: "One-tap tracking" },
  { icon: "📈", text: "Daily adherence" },
];

export default function SplashScreen({ onStart }) {
  return (
    <div className="mt-splash">
      <div className="mt-splash-inner">
        <Logo size={72} />
        <p className="mt-tagline">Never miss a dose, ever again.</p>
        <p className="mt-lede">
          MediTrack keeps your daily medicines in one simple list, shows you what to take and when,
          and lets you tick off each dose with one tap.
        </p>
        <div className="mt-highlights">
          {HIGHLIGHTS.map((h) => (
            <div className="mt-highlight" key={h.text}>
              <span>{h.icon}</span>
              {h.text}
            </div>
          ))}
        </div>
        <button className="mt-btn-primary" onClick={onStart}>
          Get Started →
        </button>
      </div>
    </div>
  );
}
