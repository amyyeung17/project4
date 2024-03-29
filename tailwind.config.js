/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./shared/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        "phone": "465px"
      },
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
        "moss": "#928C6F",
        "coral": '#FF8C61',
        "jasper": '#D5573B',
        "jasper-300": '#953d29',
        "bittersweet": '#803332',
        "amaranth-300": '#873244',
        "navajo-white": '#FFE0B5',
        "isabelline": '#F5EFED',
        "cosmos-300": '#856069',
        "cosmos-200": '#744954',
        "cosmos": '#511C29',
        "bone-600": '#52504a',
        'idk': '#3c4653',
        'triadic': '#473355',
        'triadic-100': '#d2cedf',
        'triadic-200': '#b5afc8',
        'triadic2': '#442634'
      }
    },
  },
  plugins: [
    require('@headlessui/tailwindcss')({ prefix: 'ui' }),
    require('@tailwindcss/typography'),
    require('@headlessui/tailwindcss')
  ],
}

