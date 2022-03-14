module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'dark-70': 'inset 0 0 0 2000px rgb(0 0 0 / 70%)',
        'dark-60': 'inset 0 0 0 2000px rgb(0 0 0 / 60%)',
        'dark-50': 'inset 0 0 0 2000px rgb(0 0 0 / 50%)',
      },
      colors: {
        brand: "#233681",
        copy: "#a6acb0",
        footer: "#9f9f9f",
        Whitehover: "#ffffff59",
    },
    fontFamily: {
      body: ["Roboto"], 
    }
    },
  },
  plugins: [],
}
