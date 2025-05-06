/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",   // for Next.js app directory
      "./pages/**/*.{js,ts,jsx,tsx}", // if you're using pages dir
      "./components/**/*.{js,ts,jsx,tsx}",
      "./src/**/*.{js,ts,jsx,tsx}",   // if you use a /src folder
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }
  