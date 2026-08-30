/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./hooks/**/*.{js,ts,tsx}",
    "./lib/**/*.{js,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#FBF5DD",
        sand: "#E7E1B1",
        forest: "#306D29",
        pine: "#0D530E",
        ink: "#1A1A12",
        muted: "#6B6A55",
        paper: "#FFFDF4",
      },
      borderRadius: {
        item: "20px",
        card: "28px",
        panel: "36px",
        btn: "999px",
      },
      boxShadow: {
        "elev-1":
          "0 1px 2px rgba(26,26,18,0.04), 0 4px 12px rgba(26,26,18,0.05), inset 0 1px 0 rgba(255,255,255,0.6)",
        "elev-2":
          "0 2px 4px rgba(26,26,18,0.04), 0 12px 28px rgba(26,26,18,0.07), inset 0 1px 0 rgba(255,255,255,0.6)",
        "elev-3":
          "0 4px 8px rgba(26,26,18,0.05), 0 24px 48px rgba(26,26,18,0.10), inset 0 1px 0 rgba(255,255,255,0.6)",
      },
      transitionTimingFunction: {
        spring: "cubic-bezier(0.22, 1, 0.36, 1)",
        smooth: "cubic-bezier(0.65, 0, 0.35, 1)",
      },
      transitionDuration: {
        160: "160ms",
        280: "280ms",
        520: "520ms",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1280px",
      },
      keyframes: {
        "marquee-x": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "hero-enter": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        marquee: "marquee-x 40s linear infinite",
        "hero-0": "hero-enter 520ms cubic-bezier(0.22,1,0.36,1) both",
        "hero-1": "hero-enter 520ms cubic-bezier(0.22,1,0.36,1) 80ms both",
        "hero-2": "hero-enter 520ms cubic-bezier(0.22,1,0.36,1) 160ms both",
        "hero-3": "hero-enter 520ms cubic-bezier(0.22,1,0.36,1) 240ms both",
        "hero-4": "hero-enter 520ms cubic-bezier(0.22,1,0.36,1) 320ms both",
      },
    },
  },
  plugins: [],
};
