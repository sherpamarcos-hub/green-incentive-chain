export function EttLogo({ className = "h-10 w-auto" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 120 40"
      className={className}
      width="120"
      height="40"
      aria-label="ETT"
    >
      <defs>
        <linearGradient id="ett-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#008080" />
          <stop offset="100%" stopColor="#0ea5e9" />
        </linearGradient>
      </defs>
      <polygon points="20,4 34,12 34,28 20,36 6,28 6,12" fill="url(#ett-grad)" />
      <path
        d="M20,12 Q26,16 26,24 Q20,29 20,22 Q14,24 14,16 Q20,12 20,12 Z"
        fill="#ffffff"
      />
      <text
        x="44"
        y="27"
        fontFamily="sans-serif"
        fontWeight="800"
        fontSize="22"
        fill="#1e3a5f"
        letterSpacing="1"
      >
        ETT
      </text>
    </svg>
  );
}
