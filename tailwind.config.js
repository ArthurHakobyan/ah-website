/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#222831',
      'gray': '#393E46',
      'azure': '#00ADB5',
      'cream': '#EEEEEE',
      },

      backgroundImage: {
        'my-works-bg': "url('/images/graphics/my-recent-works/doodle items.png')",
      }
    },
  },
  plugins: [],
}
