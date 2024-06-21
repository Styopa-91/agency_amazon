/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        indigo: "#3e55bc",
        gray: "#8c8c8c",
        gray47: "#787878",
        gray51: "#828282",
        gray79: "#c9c9c9",
        gray43: "#6E6E6E",
        gray92: "#ebebeb",
        seashell: "#f1f1f1",
        scorpion: "#5a5a5a",
        mercury: "#e7e7e7",
        emperor: "#505050",
        agromap: "#979797",
        submit: "#f3a704",
        active: "#f3b024",
      },
      fontFamily: {
        sans: ["Onest", "sans-serif"],
      },
      boxShadow: {
        card: "0px 6px 18px -123px rgba(0, 0, 0, 0.06)",
        cardsmall: "0px 0px 75.8px 0px rgba(0, 0, 0, 0.12)",
        banner: "0px 6px 18px -123px rgba(0, 0, 0, 0.06)",
      },
      fontFamilyInter: {
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        custom: '80px',
        customInput: '16px',
        forgetPass: '20px',
        resetPass: '23px',
        customPage: '16px',
      },
      lineHeight: {
        custom: '120px',
        customInput: '30px',
        forgetPass: '25px',
        resetPass: '28px',
        customPage: '21.91px',
      },
    },
  },
  plugins: [],
}

