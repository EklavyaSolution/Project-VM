/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header_bg': "url('../assets/header_bg.svg')",
        'appointment_bg': "url('../assets/appointment_bg.svg')",
        'about_bg': "url('../assets/about_bg.svg')",
        'booknumerosession_bg': "url('../assets/booknumerosession_bg.svg')",
        'banner_bg': "url('../assets/banner_bg.svg')",
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)'],
        nunito: ['var(--font-nunito)'],
      }
    },
  },
  plugins: [],
};
