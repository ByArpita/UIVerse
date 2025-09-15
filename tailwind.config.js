/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // --- Brand ---
        primary: "#FF6B6B",
        "primary-light": "#FFA3A3",
        "primary-dark": "#E55B5B",
        "primary-foreground": "#FFFFFF",

        secondary: "#4ECDC4",
        "secondary-foreground": "#1A1A1A",

        accent: "#FFE66D",
        "accent-foreground": "#1A1A1A",

        destructive: "#FF4C4C",
        "destructive-foreground": "#FFFFFF",

        // --- App semantics ---
        background: "#F7FFF7",
        surface: "#FFFFFF",
        "text-primary": "#1A1A1A",
        "text-secondary": "#6C757D",
        border: "#E5E7EB",
        ring: "#FF6B6B",
      },

      borderRadius: {
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
      },
    },
  },
  plugins: [],
};
