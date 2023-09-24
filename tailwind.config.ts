import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Figtree: "Figtree, sans-serif",
      },
      boxShadow: {
        bgShadow: "inset 0px 0px 41px 18px rgba(0,0,0,0.05)",
        purple: "0px 0px 10px 1px linear-gradient(to right, #4165FF, #7241FF)",
        navbar: "0px 1px 3px 0px rgba(0,0,0,0.10)",
      },
      colors: {
        bg: "#010314",
        grey: "#77798F",
        blue: "#4165FF",
        purple: "#7241FF",
      },
      backgroundColor: {
        "gradient-primary": `linear-gradient(to right, #4165FF, #7241FF`,
      },
      borderColor: {
        primary: "linear-gradient(to right, #4165FF, #7241FF",
      },
      screens: {
        "until-md": { max: "767px" },
      },
    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-var-requires
    require("tailwindcss-accent")({
      colors: ["violet", "blue", "orange"],
      root: "violet",
    }),
  ],
} satisfies Config;
