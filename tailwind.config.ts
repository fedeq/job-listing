import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        header_desktop: "url('/public/bg-header-desktop.svg')",
        header_mobile: "url('/public/bg-header-mobile.svg')",
      },
      colors: {
        desaturated_dark_cyan: "hsl(180, 29%, 50%)",
        light_grayish_cyan: "hsl(180, 31%, 95%)",
        light_grayish_cyan_background: "hsl(180, 52%, 96%)",
        dark_grayish_cyan: "hsl(180, 8%, 52%)",
        very_dark_grayish_cyan: "hsl(180, 14%, 20%)",
      },
      animation: {
        reveal: "reveal linear both",
      },
      keyframes: {
        reveal: {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animated"),
    function ({ addUtilities }: { addUtilities: Function }) {
      const newUtilities = {
        ".animation-timeline-none": {
          animationTimeline: "none",
        },
        ".animation-timeline-view": {
          animationTimeline: "view()",
        },
        ".animation-range-entry": {
          animationRange: "entry 10% cover 20%",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};

export default config;
