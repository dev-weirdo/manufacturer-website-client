module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#272343",
          secondary: "#eebbc3",
          accent: "#232946",
          neutral: "#fffffe",
          "base-100": "#232946",
          "tertiary": "#bae8e8",

        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
