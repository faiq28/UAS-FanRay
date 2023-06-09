/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./Home.html", "./Service.html","./digital.html", "./Branding.html", "./signIn.html", "./signUp.html", "./contact.html"],
  darkMode: 'class',
  theme: {
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '600px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '400px'},
      // => @media (max-width: 639px) { ... }

      'sm1': '640px',
      // => @media (min-width: 576px) { ... }

      'md1': '768px',
      // => @media (min-width: 960px) { ... }

      'lg1': '1024px',
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      fontFamily : {
        Poppins : ['Poppins']
      },
      backgroundImage : {
        'service' : "url('img/Group 27.png')",
        'works1' : "url('img/thumbnail3.jpg')",
        'sun' : "url('icon2/sun.svg')",
        'moon' : "url('icon2/moon.svg')",
      },
      colors : {
        "primary" : ['#929292']
      },
    },
  },
  plugins: [],
}
