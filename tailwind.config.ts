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
        red: "0px 0px 100px 0px rgba(167,137,255,0.25)",
        navbar: "0px 1px 3px 0px rgba(0,0,0,0.10)",
      },
      colors: {
        bg: "#010314",
        grey: "#77798F",
        blue: "#4165FF",
        purple: "#7241FF",
      },
      keyframes: {
        breath: {
          "50%": { opacity: "0.60" },
        },
      },
      animation: {
        breath: "breath 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      screens: {
        "until-sm": { max: "639px" },
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
