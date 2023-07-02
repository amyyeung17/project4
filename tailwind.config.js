/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "primary-50": "#e5eff6",
        "primary-100": "#BFD7EA",
        "primary-200": "#94bee1",
        "primary-700": "#1467b4",
        "primary-800": "#0956a3",
        "primary-900": "#003a85",
        "primary": '#957186',
        "secondary": '#F05D5E',
        "moonstone": "#58A4B0",
        "mountbatten": "#957186",
        "indigo": "#274060",
        "space": "#1B2845",
        "jet": "#3d3a4b",
        "jet-light": "#63616f",
        "moss-light": "#a7a38b",
        "moss-dark": "#66624d",
        "darkcyan": "#379392",
        "hunyadi": "#F6AE2D",
        "moss": "#928C6F"
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@headlessui/tailwindcss'),
    require('@tailwindcss/line-clamp')
  ],
}

