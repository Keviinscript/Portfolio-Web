module.exports = {
  content: ["./src/{html,js}" , "./node_modules/flowbite/**/*.js"],
  theme: {
    fontFamily: {
      'culpa':['Montserrat', 'sans-serif'],
      'incon':['Barlow Semi Condensed', 'sans-serif']
    },
//     screens:{
// 'sm': '320px',
// 'md':'400px',
//     },
    extend: {
      spacing:{
        '128': '50rem',

      }
      

    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
