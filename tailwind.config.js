/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brandBg: '#050d1a',
        brandSecondary: '#0a1628',
        brandAccent: '#4a7fa5',
        brandText: '#f0ece6',
        brandMuted: '#c8c4bc'
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(74,127,165,.4), 0 18px 48px rgba(5,13,26,.55)'
      }
    }
  },
  plugins: []
};
