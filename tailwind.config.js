/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      soft_red: 'hsl(10, 79%, 65%)',
      cyan:  'hsl(186, 34%, 60%)',
      dark_brown: 'hsl(25, 47%, 15%)',
      medium_brown: 'hsl(28, 10%, 53%)',
      cream: 'hsl(27, 66%, 92%)',
      very_pale_orange: 'hsl(33, 100%, 98%)'
    },
    screens: {
      'sm': '375px',
      'lg': '1440px',
    }
  },
  plugins: [],
}
