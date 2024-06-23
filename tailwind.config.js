/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      animation: {
        shine: "shine 2s linear infinite",
      },
      keyframes: {
        shine: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
      },
      colors: {
        bg_color: "#1f242d",
        main_color: "#0ef",
        placeholder_color: "rgba(255, 255, 255, 0.3)",
        second_bg_color: "#323946",
        text_color: "#ededed",
      },
    },
  },
  plugins: [],
};
