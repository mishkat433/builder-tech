import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'white-': "#fff",
        'black': '#000',
        'primary': '#153448',
        'secondary': '#3C5B6F',
        'third': '#948979',
        'fourth': '#DFD0B8',
        'error-color': '#F43F5E',
        "warning": "#FFBE00",
      },
      // colors: {
      //   'white-': "#fff",
      //   'black': '#000',
      //   'primary': '#40128B',
      //   'secondary': '#9336B4',
      //   'third': '#DD58D6',
      //   'fourth': '#FFE79B',
      //   'error-color': '#F43F5E',
      //   "warning": "#FFBE00",
      // },
    },
  },
  plugins: [require('daisyui'),],
};
export default config;
