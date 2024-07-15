/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./docs/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "var(--ifm-color-emphasis-300)",
        input: "var(--ifm-color-emphasis-200)",
        ring: "var(--ifm-color-primary)",
        background: "var(--ifm-background-color)",
        foreground: "var(--ifm-font-color-base)",
        primary: {
          DEFAULT: "var(--ifm-color-primary)",
          foreground: "var(--ifm-font-color-base-inverse)",
        },
        secondary: {
          DEFAULT: "var(--ifm-color-secondary)",
          foreground: "var(--ifm-font-color-base)",
        },
        destructive: {
          DEFAULT: "var(--ifm-color-danger)",
          foreground: "var(--ifm-font-color-base-inverse)",
        },
        muted: {
          DEFAULT: "var(--ifm-color-emphasis-200)",
          foreground: "var(--ifm-color-emphasis-700)",
        },
        accent: {
          DEFAULT: "var(--ifm-color-emphasis-100)",
          foreground: "var(--ifm-font-color-base)",
        },
        popover: {
          DEFAULT: "var(--ifm-background-surface-color)",
          foreground: "var(--ifm-font-color-base)",
        },
        card: {
          DEFAULT: "var(--ifm-background-surface-color)",
          foreground: "var(--ifm-font-color-base)",
        },
      },
      borderRadius: {
        lg: "var(--ifm-border-radius)",
        md: "calc(var(--ifm-border-radius) * 0.75)",
        sm: "calc(var(--ifm-border-radius) * 0.5)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: ['class', '[data-theme="dark"]'],
  corePlugins: {
    preflight: false,
  },
};