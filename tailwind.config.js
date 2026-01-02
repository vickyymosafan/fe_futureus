/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./app/components/**/*.{js,vue,ts}",
    "./app/layouts/**/*.vue",
    "./app/pages/**/*.vue",
    "./app/plugins/**/*.{js,ts}",
    "./app/app.vue",
    "./app/error.vue",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#13ec5b",
        "background-light": "#f6f8f6",
        "background-dark": "#102216",
        "surface-dark": "#112217", // Metric: #112217 from design
        "border-green": "#326744", // Added from design
        "input-bg": "#193322",     // Added from design
        "text-secondary": "#92c9a4", // Metric: #92c9a4 from design
        "card-dark": "#1c3324",      // Better blend for dark mode cards
        "card-border": "#326744",    // Alias for border-green
      },
      fontFamily: {
        "display": ["Manrope", "sans-serif"],
        "body": ["Noto Sans", "sans-serif"], // Added body font
      },
      borderRadius: {"DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px"},
    },
  },
  plugins: [],
}
