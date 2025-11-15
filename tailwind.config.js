/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./App.tsx", "./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        // Dark theme palette based on Figma
        background: "#141718",
        surface: "#1E1E1E",
        primary: "#4CAF50", // Green tick color
        text: "#FFFFFF",
        secondaryText: "#AAAAAA",
        border: "#333333",
        card: "#252525",
      },
    },
  },
  plugins: [],
};
