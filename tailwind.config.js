/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // Direct mapping to your palette
                background: "var(--background)",
                secondary: "var(--secondary)",
                primary: "var(--primary)",
                foreground: "var(--foreground)",
            },
            borderRadius: {
                // Strict 2025 Q4 Design Rules: Everything is 8px (lg)
                'none': '0',
                'sm': '0.125rem',
                'DEFAULT': '0.5rem',
                'md': '0.375rem',
                'lg': '0.5rem',      /* 8px - Main target */
                'xl': '0.5rem',      /* Forced to 8px */
                '2xl': '0.5rem',     /* Forced to 8px */
                '3xl': '0.5rem',     /* Forced to 8px */
                'full': '0.5rem',    /* No pill shapes allowed */
            },
            keyframes: {
                "scroll-left": {
                    "0%": { transform: "translateX(0)" },
                    "100%": { transform: "translateX(calc(-100% - 2rem))" },
                },
                "scroll-right": {
                    "0%": { transform: "translateX(calc(-100% - 2rem))" },
                    "100%": { transform: "translateX(0)" },
                },
            },
            animation: {
                "scroll-left": "scroll-left 25s linear infinite",
                "scroll-right": "scroll-right 25s linear infinite",
            },
        },
    },
    plugins: [
        require("tailwindcss-motion"),
        require("@tailwindcss/typography"),
    ],
};