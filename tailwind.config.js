/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        inter: ['var(--font-inter)']
      },
      colors:{
        background: 'rgb(var(--background))',
        foreground: 'rgb(var(--foreground))',
        muted: 'rgb(var(--muted))',
        accent: 'rgb(var(--accent))',
      },
      backgroundImage:{
        'firefly-radial': "radial-gradient(50% 50% at 50% 50%, rgba(253, 255, 80, 0.5) 0%, rgba(217,217,217, 0) 100%)"
      },
      boxShadow:{
        'glass-inset': 'inset 0 17px 5px -9px rgba(254,254,91, 0.05)',
        'glass-sm': '5px 5px 20px 0px rgba(254,254,91, 0.3)',
      },
      keyframes:{
      'spin-reverse':{
        '0%': {transform: 'rotate(0deg)'},
        '100%': {transform: 'rotate(-360deg)'}
      },
      blink: {
        '0%, 49%': {opacity: '1'},
        '50%, 100%': {opacity: '0'}
      },
      float: {
        '0%, 100%': {transform: 'translateY(0)'},
        '50%': {transform: 'translateY(-6px)'}
      },
      'bubble-in': {
        '0%': {opacity: '0', transform: 'scale(0.3) rotate(-8deg)'},
        '65%': {opacity: '1', transform: 'scale(1.06) rotate(1.5deg)'},
        '100%': {opacity: '1', transform: 'scale(1) rotate(0)'}
      },
      'bubble-out': {
        '0%': {opacity: '1', transform: 'scale(1) rotate(0)'},
        '100%': {opacity: '0', transform: 'scale(0.3) rotate(-8deg)'}
      },
      'fade-up': {
        '0%': {opacity: '0', transform: 'translateY(4px)'},
        '100%': {opacity: '1', transform: 'translateY(0)'}
      }
      },
      animation:{
        'spin-slow': 'spin 40s linear infinite',
        'spin-slow-reverse': 'spin-reverse 40s linear infinite',
        'blink': 'blink 1s step-end infinite',
        'float': 'float 3s ease-in-out infinite',
        'bubble-in': 'bubble-in 0.55s cubic-bezier(0.34, 1.56, 0.64, 1) both',
        'bubble-out': 'bubble-out 0.3s ease-in both',
        'fade-up': 'fade-up 0.4s ease-out 0.25s both',
      },
      screens:{
        xs: '480px',
      }
    },
  },
  plugins: [],
};
