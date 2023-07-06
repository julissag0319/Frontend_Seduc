/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-fondo": "#88CFE0",
        "color-borde":"#88CFE0",
        "color-rojo":"#db473c",
        "color-gray":"#949699"
      },
    },
  },
  plugins: [],

  backgroundImage: {
    "img-purple": "url('/src/assets/undraw_teacher_re_sico.svg')",

},
};



