export default function StatCard({ icon, label, value, color }) {
  return (
    <div className="mt-stat" style={{ borderLeftColor: color }}>
      <span className="mt-stat-icon">{icon}</span>
      <div>
        <div className="mt-stat-value" style={{ color }}>
          {value}
        </div>
        <div className="mt-stat-label">{label}</div>
      </div>
    </div>
  );
}
