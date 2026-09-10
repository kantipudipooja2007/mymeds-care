export default function ProgressRing({ percent, size = 168, stroke = 16 }) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const offset = c - (Math.min(100, Math.max(0, percent)) / 100) * c;

  return (
    <svg width={size} height={size} role="img" aria-label={`${percent}% of doses taken`}>
      <defs>
        <linearGradient id="mt-ring" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#14C7BE" />
          <stop offset="100%" stopColor="#3D7DF6" />
        </linearGradient>
      </defs>
      <circle cx={size / 2} cy={size / 2} r={r} stroke="#E3EAF7" strokeWidth={stroke} fill="none" />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        stroke="url(#mt-ring)"
        strokeWidth={stroke}
        strokeLinecap="round"
        fill="none"
        strokeDasharray={c}
        strokeDashoffset={offset}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
        style={{ transition: "stroke-dashoffset 0.5s ease" }}
      />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dy="0.36em"
        fontSize={size * 0.24}
        fontWeight="800"
        fontFamily="Poppins, sans-serif"
        fill="#17233A"
      >
        {percent}%
      </text>
    </svg>
  );
}
