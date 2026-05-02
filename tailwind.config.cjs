/** @type {import('tailwindcss').Config} */
const withOpacityValue = (variable) => `rgb(var(${variable}) / <alpha-value>)`;

module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: withOpacityValue("--color-bg"),
        surface: withOpacityValue("--color-surface"),
        foreground: withOpacityValue("--color-foreground"),
        muted: withOpacityValue("--color-muted"),
        primary: withOpacityValue("--color-primary"),
        accent: withOpacityValue("--color-accent"),
        border: withOpacityValue("--color-border"),
      },
      fontFamily: {
        heading: ["Inter", "sans-serif"],
        body: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
