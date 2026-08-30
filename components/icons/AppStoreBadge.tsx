export function AppStoreBadge({
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
      aria-label="Download on the App Store"
      role="img"
    >
      {/* Background */}
      <rect width="135" height="40" rx="7.5" fill="#000" />
      <rect x="0.5" y="0.5" width="134" height="39" rx="7" stroke="#A6A6A6" strokeWidth="1" fill="none" />

      {/* Apple logo */}
      <path
        d="M24.769 20.301c-.028-3.223 2.633-4.791 2.753-4.864-1.503-2.195-3.838-2.495-4.659-2.52-1.967-.2-3.87 1.174-4.87 1.174-1.02 0-2.565-1.154-4.228-1.12-2.149.033-4.15 1.266-5.253 3.186-2.267 3.922-.578 9.7 1.6 12.876 1.089 1.558 2.362 3.298 4.023 3.236 1.625-.067 2.234-1.036 4.198-1.036 1.946 0 2.518 1.036 4.22.997 1.75-.028 2.851-1.566 3.905-3.138 1.253-1.789 1.762-3.55 1.782-3.641-.04-.015-3.41-1.302-3.471-5.15z"
        fill="#fff"
      />
      <path
        d="M21.522 11.422c.874-1.093 1.471-2.587 1.306-4.1-1.264.055-2.838.874-3.747 1.942-.806.937-1.525 2.47-1.338 3.927 1.42.107 2.876-.712 3.779-1.769z"
        fill="#fff"
      />

      {/* "Download on the" */}
      <text
        x="40"
        y="14"
        fill="#fff"
        fontFamily="-apple-system, 'SF Pro Text', 'Helvetica Neue', Arial, sans-serif"
        fontSize="9"
        letterSpacing="0.1"
      >
        Download on the
      </text>

      {/* "App Store" */}
      <text
        x="39.5"
        y="28"
        fill="#fff"
        fontFamily="-apple-system, 'SF Pro Display', 'Helvetica Neue', Arial, sans-serif"
        fontSize="17"
        fontWeight="600"
        letterSpacing="-0.2"
      >
        App Store
      </text>
    </svg>
  );
}
