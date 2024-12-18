module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customYellow1: "#FFA337",
        customYellow2: "#FFB70B",
        customYellow3: "#FFB45F",
        customYellow4: "#FDC050",
        customGrayColor: "#8F9093",
        customBgColor: "#F9F9F9",
        customBorderColor: "#E8E8E8",
        customBgSuccessStory: "#FFF4DF",
        customRed: "#9E0101",
      },
      // boxShadow: {
      //   "b-lg": "0px 5px 10px rgba(0, 0, 0, 0.15)", // Bottom shadow
      // },
    },
  },
  plugins: [],
};
