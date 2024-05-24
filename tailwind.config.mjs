/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        Orbitron: ["Orbitron", "sans-serif"],
        PlusJakartaSans: ["PlusJakartaSans", "sans-serif"],
      },
      colors: {
        bodyColor: "#18181B",
        textPrimary: "#FFFFFF",
        textSecondary: "#97979F",
        textContent: "#B7B7B7",
        themePrimary: "#33CB94",
      },
    },
  },
  plugins: [],
};
