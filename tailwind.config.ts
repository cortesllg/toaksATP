import type { Config } from 'tailwindcss';

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {  
    extend: {
      colors: {
        primary: '#537744',
        secondary: '#313F58',
        'base-blue': '#A3C7C7',
        'base-yellow': '#581845',
        'base-green': '#6CC5BC',
        'base-orange': '#D96543',
      },
      fontFamily: {
        sans: ['Arial', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;

