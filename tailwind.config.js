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
        "background-dark": "#102216", // Deep dark green/charcoal
        "surface-dark": "#1c2e22",
        "text-secondary": "#9db9a6",
        "border-dark": "#28392e"
      },
      fontFamily: {
        "display": ["Manrope", "sans-serif"]
      },
      borderRadius: {"DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px"},
    },
  },
  plugins: [],
}
