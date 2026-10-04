/* DigitalMax logo — brand colors: white mark + #c74b25 bolt + rust #c74b25 pill.
   Transparent background; designed for the dark navy nav/footer. */
export default function Logo() {
  return (
    <svg className="dm-logo" viewBox="36 0 834 240" role="img" aria-label="DigitalMax logo">
      <path
        d="M84 52 L84 188 L204 120 Z"
        fill="none"
        stroke="#ffffff"
        strokeWidth="36"
        strokeLinejoin="round"
      />
      <polygon
        points="127,58 97,125 120,125 101,187 152,111 127,111"
        fill="#c74b25"
      />
      <text
        x="248"
        y="158"
        fontFamily="Poppins, sans-serif"
        fontWeight="800"
        fontSize="88"
        fill="#ffffff"
        letterSpacing="-1"
      >
        Digital
      </text>
      <rect x="578" y="80" width="262" height="96" rx="48" fill="#c74b25" />
      <text
        x="709"
        y="158"
        textAnchor="middle"
        fontFamily="Poppins, sans-serif"
        fontWeight="800"
        fontSize="88"
        fill="#ffffff"
        letterSpacing="-1"
      >
        Max
      </text>
    </svg>
  );
}
