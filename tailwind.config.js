/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx,html}"],
  theme: {
    extend: {
      colors: {
        moss: {
          50: "#f0fdf0",
          100: "#dcfce0",
          500: "#22c55e",
          600: "#16a34a",
          900: "#14532d",
          950: "#0a2e18",
        },
      },
      fontFamily: {
        mono: ["'JetBrains Mono'", "monospace"],
      },
    },
  },
  plugins: [],
};
