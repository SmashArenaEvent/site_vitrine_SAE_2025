/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    "colors": {
      "Noir": "#1a2521",
      "Tonic": "#1ce99f",
      "Tonic_Sombre": "#167E59",
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
     "screens": {
      "sp": "450px",
      'sm': '640px',
      'md': '768px',
      "lg": "1024px",
      'xl': '1280px',
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
        'telprincipal':'repeat(12, 1fr)',
        'tel12': 'repeat(12, 1fr)',
        'tel11': 'repeat(11, 1fr)',
        'tel10': 'repeat(10, 1fr)',
        'tel9': 'repeat(9, 1fr)',
        'tel8': 'repeat(8, 1fr)',
        'tel7': 'repeat(7, 1fr)',
        'tel6': 'repeat(6, 1fr)',
        'tel5': 'repeat(5, 1fr)',
        'tel4': 'repeat(4, 1fr)',
        'tel3': 'repeat(3, 1fr)',
        'tel2': 'repeat(2, 1fr)',
        'tel1': 'repeat(1, 1fr)',
      }
    },
  },
  plugins: []
}
