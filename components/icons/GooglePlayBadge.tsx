export function GooglePlayBadge({
  height = 44,
  className,
}: {
  height?: number;
  className?: string;
}) {
  const w = Math.round(height * (135 / 40));
  return (
    <svg
      width={w}
      height={height}
      viewBox="0 0 135 40"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Get it on Google Play"
      role="img"
    >
      {/* Background */}
      <rect width="135" height="40" rx="7.5" fill="#000" />
      <rect x="0.5" y="0.5" width="134" height="39" rx="7" stroke="#A6A6A6" strokeWidth="1" fill="none" />

      {/* Google Play triangle icon */}
      <g transform="translate(10, 8)">
        {/* Shadow/gradient layer behind the triangles */}
        {/* Left green triangle */}
        <path d="M1.218 0.543C0.875 0.903 0.673 1.46 0.673 2.19v19.62c0 .73.202 1.288.545 1.647l.087.084 10.99-10.99v-.26L1.305.459l-.087.084z" fill="url(#gg1)" />
        {/* Top blue triangle */}
        <path d="M15.954 15.21l-3.659-3.659v-.26l3.66-3.659.082.047 4.334 2.463c1.238.703 1.238 1.853 0 2.557l-4.334 2.463-.083.048z" fill="url(#gg2)" />
        {/* Bottom red triangle */}
        <path d="M16.036 15.162L12.295 11.42 1.218 22.497c.408.432 1.082.486 1.843.054l12.975-7.389" fill="url(#gg3)" />
        {/* Top yellow triangle */}
        <path d="M16.036 7.678L3.061.289C2.3-.143 1.626-.089 1.218.343l11.077 11.078 3.741-3.743z" fill="url(#gg4)" />

        <defs>
          <linearGradient id="gg1" x1="11.44" y1="1.524" x2="-4.71" y2="17.674" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00A0FF" />
            <stop offset="0.007" stopColor="#00A1FF" />
            <stop offset="0.26" stopColor="#00BEFF" />
            <stop offset="0.512" stopColor="#00D2FF" />
            <stop offset="0.76" stopColor="#00DFFF" />
            <stop offset="1" stopColor="#00E3FF" />
          </linearGradient>
          <linearGradient id="gg2" x1="21.8" y1="11.5" x2="0.332" y2="11.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFE000" />
            <stop offset="0.409" stopColor="#FFBD00" />
            <stop offset="0.775" stopColor="#FFA500" />
            <stop offset="1" stopColor="#FF9C00" />
          </linearGradient>
          <linearGradient id="gg3" x1="13.997" y1="13.32" x2="-5.516" y2="32.833" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF3A44" />
            <stop offset="1" stopColor="#C31162" />
          </linearGradient>
          <linearGradient id="gg4" x1="-1.877" y1="-5.765" x2="7.655" y2="3.768" gradientUnits="userSpaceOnUse">
            <stop stopColor="#32A071" />
            <stop offset="0.069" stopColor="#2DA771" />
            <stop offset="0.476" stopColor="#15CF74" />
            <stop offset="0.801" stopColor="#06E775" />
            <stop offset="1" stopColor="#00F076" />
          </linearGradient>
        </defs>
      </g>

      {/* "GET IT ON" */}
      <text
        x="40"
        y="14"
        fill="#fff"
        fontFamily="-apple-system, 'Helvetica Neue', Arial, sans-serif"
        fontSize="9"
        letterSpacing="0.6"
      >
        GET IT ON
      </text>

      {/* "Google Play" */}
      <text
        x="39.5"
        y="28"
        fill="#fff"
        fontFamily="-apple-system, 'Helvetica Neue', Arial, sans-serif"
        fontSize="17"
        fontWeight="500"
        letterSpacing="-0.2"
      >
        Google Play
      </text>
    </svg>
  );
}
