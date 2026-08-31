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
        // ── Dark purple palette ──────────────────────────────────────
        canvas: "#000000",      // page background
        paper:  "#0A0018",      // card / surface
        sand:   "#1E0038",      // borders, dividers
        forest: "#700B97",      // primary accent
        pine:   "#3E065F",      // secondary / darker accent
        bright: "#8E05C2",      // highlight / gradient end
        ink:    "#F0E8FF",      // main text (light on dark)
        muted:  "#9080A8",      // secondary text
      },
      borderRadius: {
        item:   "6px",
        card:   "10px",
        panel:  "14px",
        btn:    "4px",
      },
      boxShadow: {
        "elev-1":
          "0 1px 3px rgba(0,0,0,0.7), 0 4px 16px rgba(62,6,95,0.45), inset 0 1px 0 rgba(142,5,194,0.08)",
        "elev-2":
          "0 2px 6px rgba(0,0,0,0.8), 0 12px 32px rgba(62,6,95,0.55), inset 0 1px 0 rgba(142,5,194,0.10)",
        "elev-3":
          "0 4px 12px rgba(0,0,0,0.9), 0 24px 56px rgba(62,6,95,0.65), inset 0 1px 0 rgba(142,5,194,0.14)",
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
          to:   { transform: "translateX(-50%)" },
        },
        "marquee-x-reverse": {
          from: { transform: "translateX(-50%)" },
          to:   { transform: "translateX(0)" },
        },
        "hero-enter": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        // Orb drift animations
        "orb-1": {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%":       { transform: "translate(48px, -56px) scale(1.06)" },
          "66%":       { transform: "translate(-32px, 32px) scale(0.94)" },
        },
        "orb-2": {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "50%":       { transform: "translate(-56px, -44px) scale(1.12)" },
        },
        "orb-3": {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "50%":       { transform: "translate(44px, 28px) scale(1.06)" },
        },
        // Float
        "float-y": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":       { transform: "translateY(-10px)" },
        },
        "float-y-delayed": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":       { transform: "translateY(-8px)" },
        },
        // Glow pulse
        "glow-pulse": {
          "0%, 100%": { opacity: "0.5",  transform: "scaleX(1)" },
          "50%":       { opacity: "0.75", transform: "scaleX(1.08)" },
        },
        // Shimmer (for progress bar glow)
        "shimmer": {
          from: { backgroundPosition: "-200% center" },
          to:   { backgroundPosition: "200% center" },
        },
      },
      animation: {
        marquee: "marquee-x 8s linear infinite",
        "marquee-reverse": "marquee-x-reverse 12s linear infinite",
        "marquee-alt": "marquee-x 10s linear infinite",
        "hero-0": "hero-enter 520ms cubic-bezier(0.22,1,0.36,1) both",
        "hero-1": "hero-enter 520ms cubic-bezier(0.22,1,0.36,1) 80ms both",
        "hero-2": "hero-enter 520ms cubic-bezier(0.22,1,0.36,1) 160ms both",
        "hero-3": "hero-enter 520ms cubic-bezier(0.22,1,0.36,1) 240ms both",
        "hero-4": "hero-enter 520ms cubic-bezier(0.22,1,0.36,1) 320ms both",
        // Orbs
        "orb-1": "orb-1 20s ease-in-out infinite",
        "orb-2": "orb-2 26s ease-in-out infinite",
        "orb-3": "orb-3 22s ease-in-out infinite 4s",
        // Floats
        "float-y":         "float-y 5s ease-in-out infinite",
        "float-y-delayed": "float-y-delayed 6s ease-in-out infinite 2.5s",
        // Glow
        "glow-pulse": "glow-pulse 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
