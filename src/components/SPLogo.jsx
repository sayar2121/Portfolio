import './SPLogo.css';

export default function SPLogo({ size = 48, className = '' }) {
  const id = `sp-logo-${Math.random().toString(36).substr(2, 5)}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`sp-logo ${className}`}
    >
      <defs>
        {/* Outer neon ring gradient — purple to cyan */}
        <linearGradient id={`ring-grad-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B44FFF" />
          <stop offset="50%" stopColor="#6B2FDB" />
          <stop offset="100%" stopColor="#00CFFF" />
        </linearGradient>

        {/* Inner letter gradient */}
        <linearGradient id={`letter-grad-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="40%" stopColor="#C8DDFF" />
          <stop offset="100%" stopColor="#8AB4FF" />
        </linearGradient>

        {/* Background radial */}
        <radialGradient id={`bg-grad-${id}`} cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#1A1A3E" />
          <stop offset="100%" stopColor="#080818" />
        </radialGradient>

        {/* Outer glow filter */}
        <filter id={`glow-${id}`} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Ring glow */}
        <filter id={`ring-glow-${id}`} x="-15%" y="-15%" width="130%" height="130%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Dark circular background */}
      <circle cx="50" cy="50" r="48" fill={`url(#bg-grad-${id})`} />

      {/* Outer glow ring (thick, blurred) */}
      <circle
        cx="50" cy="50" r="46"
        stroke={`url(#ring-grad-${id})`}
        strokeWidth="5"
        fill="none"
        filter={`url(#ring-glow-${id})`}
        opacity="0.9"
      />

      {/* Crisp ring on top */}
      <circle
        cx="50" cy="50" r="46"
        stroke={`url(#ring-grad-${id})`}
        strokeWidth="2.5"
        fill="none"
        opacity="1"
      />

      {/* SP Letters — custom shaped paths for the stylized look */}
      {/* S letter */}
      <text
        x="17"
        y="65"
        fontFamily="'Space Grotesk', 'Inter', sans-serif"
        fontWeight="800"
        fontSize="52"
        fill={`url(#letter-grad-${id})`}
        filter={`url(#glow-${id})`}
        letterSpacing="-2"
      >
        SP
      </text>
    </svg>
  );
}
