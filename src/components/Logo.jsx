export default function Logo({ size = 44, dark = false, showWord = true }) {
  return (
    <div className="mt-logo">
      <div className="mt-logo-mark" style={{ width: size, height: size }}>
        <svg
          width={size * 0.62}
          height={size * 0.62}
          viewBox="0 0 24 24"
          fill="none"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="2.5" y="7.5" width="19" height="9" rx="4.5" />
          <path d="M4 12h3l1.5-2.5L10.5 15l1.6-3H20" />
        </svg>
      </div>
      {showWord && (
        <div
          className={dark ? "mt-logo-word dark" : "mt-logo-word"}
          style={{ fontSize: size * 0.66 }}
        >
          Medi<span>Track</span>
        </div>
      )}
    </div>
  );
}
