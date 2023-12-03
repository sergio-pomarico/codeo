/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "Helvetica", "Arial", "sans-serif"],
        montserrat: ["Montserrat", "Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
