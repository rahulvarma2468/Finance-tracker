// tailwind.config.cjs
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // These are example values from shadcn/ui
        border: "hsl(240, 10%, 94%)",
        input: "hsl(240, 10%, 94%)",
        ring: "hsl(215, 96%, 60%)",
        background: "hsl(0, 0%, 100%)",
        foreground: "hsl(240, 10%, 3.9%)",
        primary: {
          DEFAULT: "hsl(215, 96%, 60%)",
          foreground: "hsl(0, 0%, 98%)",
        },
        // Add more if needed...
      },
    },
  },
  plugins: [],
};