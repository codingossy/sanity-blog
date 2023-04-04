module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: 'Saira',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '3rem',
        xl: '4rem',
        '2xl': '5rem',
      },
    },
     screens: {
      xs: '375px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        primary: '#23262F',
        accent: '#286F6C',
        grey: {
          DEFAULT: '#919297',
          1: '#D9D9D9',
          2: '#E7E9EB',
          3: '#F5F5F5',
        },
        // white: '#fff',
        // pink: 'pink',
      },
      backgroundImage: {
        home: 'url("./images/a2.jpeg")',
        newsletter: 'url("./images/newsletter.png")',
        herobg: 'url("/src/assets/b5.jpeg")',
      },
      dropShadow: {
        primary: '0px 4px 10px rgba(15, 27, 51, 0.05);',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('tailwindcss-tables')(),
   
  ],
};
