/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        tito: "rgba(0, 0, 0, 0.08)",
        gray1: "rgba(255, 255, 255, 0.2)",
        gray2: "rgba(0, 0, 0, 0.1)",
        gray3: "rgba(255, 255, 255, 0.6)",
        dimgray: "#515151",
        gray: "rgba(255, 255, 255, 0.14)",
        warning: "#fba91d",
        gainsboro: "#d9d9d9",
        positive: "#72ec73",
        orange: "#fba91d",
        dodgerblue: "#1d96ff",
        "surface-surface-white": "#fff",
      },
      boxShadow: {
        inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        "dm-mono": "'DM Mono'",
      },
    },
  },
  plugins: [],
};
