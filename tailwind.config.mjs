/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        Fraunces: ["Fraunces", "sans-serif"],
        PlusJakartaSans: ["PlusJakartaSans", "sans-serif"],
      },
      colors: {
        bodyColor: "#FAFAFA",
        textPrimary: "#242425",
        themePrimary: "#FBD570",
        themeSecondary: "#B7B4ED",
        topicTag: "#ecebfd",
      },
    },
  },
  plugins: [],
};
