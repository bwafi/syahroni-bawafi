/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        calibre: "var(--font-calibre)",
        sfMono: "var(--font-sfMono)",
      },
      colors: {
        navy: "#0a192f",
        "light-navy": "#112240",
        "lightes-navy": "#233554",
        slate: "#8892b0",
        "light-slate": "#a8b2d1",
        "lightes-slate": "#ccd6f6",
        white: "#e6f1ff",
        green: "#64ffda",
      },
      transitionTimingFunction: {
        button: "cubic-bezier(0.645, 0.045, 0.355, 1)",
      },
      boxShadow: {
        navy: "0 10px 30px -15px rgba(2,12,27,0.7)",
      },
    },
  },
  plugins: [],
};
