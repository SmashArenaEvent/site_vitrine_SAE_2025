/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    "colors": {
      "Noir": "#1a2521",
      "Tonic": "#1ce99f",
      "Tonic_Sombre": "#1A9468",
      "Noir_Vert": "rgba(26, 37, 33, 0.7)",
      "Blanc": "#f5f5f5",
      "Gris": "#2c3632",
      "Gris_clair": "#a0b1aa",
      "transparent": "transparent",
    },
    "fontFamily": {
      "fugaz-one": "Fugaz One",
      "gothic-a1": "Gothic A1"
     },
    extend: {}
  },
  plugins: []
}
