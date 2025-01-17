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
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        'principal': 'repeat(12, 1fr)',
        '12': 'repeat(12, 1fr)',
        '11': 'repeat(11, 1fr)',
        '10': 'repeat(10, 1fr)',
        '9': 'repeat(9, 1fr)',
        '8': 'repeat(8, 1fr)',
        '7': 'repeat(7, 1fr)',
        '6': 'repeat(6, 1fr)',
        '5': 'repeat(5, 1fr)',
        '4': 'repeat(4, 1fr)',
        '3': 'repeat(3, 1fr)',
        '2': 'repeat(2, 1fr)',
        '1': 'repeat(1, 1fr)',
        'telprincipal':'repeat(12, 20px)',
        'tel12': 'repeat(12, 20px)',
        'tel11': 'repeat(11, 20px)',
        'tel10': 'repeat(10, 20px)',
        'tel9': 'repeat(9, 20px)',
        'tel8': 'repeat(8, 20px)',
        'tel7': 'repeat(7, 20px)',
        'tel6': 'repeat(6, 20px)',
        'tel5': 'repeat(5, 20px)',
        'tel4': 'repeat(4, 20px)',
        'tel3': 'repeat(3, 20px)',
        'tel2': 'repeat(2, 20px)',
        'tel1': 'repeat(1, 20px)',
      }
    },
  },
  plugins: []
}
