/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        raleway: "'Raleway', 'sans-serif'",
        lora: "'Lora', 'serif'",
        dm: "'DM Mono', 'monospace'"
      }
    }
  },
  plugins: []
}
