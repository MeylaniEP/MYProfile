// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}', // Pastikan ini ada jika Anda punya folder src
  ],
  theme: {
    extend: {
      keyframes: {
        // --- EXISTING ANIMATIONS --- (Pastikan yang ini sudah dikoreksi typo)
        'blink': { /* ... */ },
        'bounce-subtle': { /* ... */ },
        'edge-glow-alt': { /* ... */ },
        'glitch': { /* ... */ }, // Double check this for syntax errors like the missing comma in the original
        'glitch-after': { /* ... */ },

        // --- NEW ANIMATIONS FOR ABOUT & SKILLS SECTIONS ---
        'blob': {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 5px rgba(168, 85, 247, 0.4)' },
          '50%': { boxShadow: '0 0 15px rgba(168, 85, 247, 0.8)' },
        },
        'pulse-border': {
          '0%, 100%': { borderColor: 'rgba(168, 85, 247, 0.4)' },
          '50%': { borderColor: 'rgba(168, 85, 247, 1)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-down': {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-right': {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        // --- NEW KEYFRAMES FOR HARD SKILLS DOTS & ICON BORDER ---
        'pulse-border-fade': { // A more subtle border pulse for hovered icons
            '0%, 100%': { borderColor: 'rgba(251, 113, 133, 0.2)' }, // fuchsia-400/20
            '50%': { borderColor: 'rgba(251, 113, 133, 0.8)' }, // fuchsia-400/80
        },
        'bounce-dot': { // For individual dots filling up
            '0%, 100%': { transform: 'scale(1)' },
            '50%': { transform: 'scale(1.2)' },
        }
      },
      animation: {
        // --- EXISTING ANIMATIONS ---
        'blink': 'blink 1s step-end infinite',
        'bounce-subtle': 'bounce-subtle 3s ease-in-out infinite',
        'edge-glow-alt': 'edge-glow-alt 3s ease-in-out infinite alternate',
        'glitch': 'glitch 0.3s steps(1, end) infinite',
        'glitch-after': 'glitch-after 0.3s steps(1, end) infinite',

        // --- NEW ANIMATIONS FOR ABOUT & SKILLS SECTIONS ---
        'blob-animation': 'blob 7s infinite cubic-bezier(0.6, 0.4, 0.4, 0.8)',
        'pulse-glow': 'pulse-glow 2s infinite cubic-bezier(0.4, 0, 0.6, 1)',
        'pulse-border': 'pulse-border 2s infinite cubic-bezier(0.4, 0, 0.6, 1)',
        'fade-in-up': 'fade-in-up 0.3s ease-out forwards',
        'fade-in-down': 'fade-in-down 0.3s ease-out forwards',
        'fade-in-right': 'fade-in-right 0.3s ease-out forwards',
        'fade-in': 'fade-in 0.5s ease-out forwards',

        // --- NEW ANIMATIONS FOR HARD SKILLS DOTS & ICON BORDER ---
        'pulse-border-fade': 'pulse-border-fade 1.5s ease-in-out infinite alternate',
        'bounce-dot': 'bounce-dot 0.6s ease-out forwards', // forwards to stay at final state
      },
      textShadow: {
        'lg': '0 5px 15px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const newUtilities = {
        '.text-shadow-lg': {
          textShadow: theme('textShadow.lg'),
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
};