/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#F7F2E9",
        ivory2: "#EFE6D4",
        charcoal: "#231F1C",
        charcoal2: "#2E2924",
        bronze: "#8C6B4F",
        bronze2: "#A9835F",
        gold: "#C9A24B",
        goldLight: "#E4C878",
        terracotta: "#B4552C",
        deepred: "#7A1F1F",
      },
      fontFamily: {
        serif: ["'Playfair Display'", "Georgia", "serif"],
        body: ["'Cormorant Garamond'", "'Georgia'", "serif"],
        sans: ["'Inter'", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        grain: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        museum: "0 20px 60px -15px rgba(0,0,0,0.5)",
      },
    },
  },
  plugins: [],
}
