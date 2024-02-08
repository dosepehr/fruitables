import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: { min: "500px" },
        md: { min: "768px" },
        lg: { min: "992px" },
        xl: { min: "1200px" },
      },
      fontFamily: {
        ralewayRegular: "Raleway-regular",
        ralewayLight: "Raleway-light",
        ralewayBold: "Raleway-bold",
      },
      colors: {
        lightGreen: "#81C408",
        mainYellow: "#FFb524",
        darkGray: "#45595b",
        lightGray:'#747D88'
      },
    },
  },
  plugins: [],
};
export default config;
