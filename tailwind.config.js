export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        ivory: "#FBF6EC",
        cream: "#F4EAD5",
        champagne: "#E8D3A2",
        gold: "#C9A24B",
        antique: "#8F6A2C",
        maroon: { DEFAULT: "#7A2533", dark: "#5E1A27" },
        blush: "#E9C9C3",
        ink: "#3A2A1D",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        script: ['"Pinyon Script"', "cursive"],
      },
      boxShadow: {
        card: "0 30px 80px -24px rgba(92, 62, 24, 0.45), 0 8px 24px -12px rgba(92, 62, 24, 0.25)",
        soft: "0 12px 32px -16px rgba(92, 62, 24, 0.35)",
      },
    },
  },
};
