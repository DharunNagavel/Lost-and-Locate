/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryDark: "#1F0051",
        primaryMain: "#29006B",
        accentLight: "#CFB0FF",
        backgroundLight: "#D8BFFF",
      },
    },
  },
};
