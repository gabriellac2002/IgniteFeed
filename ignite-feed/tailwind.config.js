/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          100: "#e1e1e6",
          300: "#c4c4cc",
          400: "#8d8d99",
          600: "#323238",
          700: "#29292e",
          800: "#202024",
          900: "#121214",
        },

        green: {
          500: "#00875f",
        },
      },
    },
  },
  plugins: [],
};
