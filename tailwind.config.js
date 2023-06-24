/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "hero-image":
          "url('cn-construcciones/vite-project/src/assets/Construction-site-plans.jpg')",
      },
    },
  },
  plugins: [require("daisyui", "@tailwindcss/forms")],
};
