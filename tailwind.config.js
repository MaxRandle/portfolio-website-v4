/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        base: {
          100: "var(--base-100)",
          200: "var(--base-200)",
          300: "var(--base-300)",
          400: "var(--base-400)",
          500: "var(--base-500)",
          600: "var(--base-600)",
          700: "var(--base-700)",
          800: "var(--base-800)",
          900: "var(--base-900)",
          1000: "var(--base-1000)",
          1100: "var(--base-1100)",
          1200: "var(--base-1200)",
          1300: "var(--base-1300)",
          1400: "var(--base-1400)",
          1500: "var(--base-1500)",
          1600: "var(--base-1600)",
        },
        accent: {
          100: "var(--accent-100)",
          200: "var(--accent-200)",
          300: "var(--accent-300)",
          400: "var(--accent-400)",
          500: "var(--accent-500)",
          600: "var(--accent-600)",
          700: "var(--accent-700)",
          800: "var(--accent-800)",
          900: "var(--accent-900)",
          1000: "var(--accent-1000)",
          1100: "var(--accent-1100)",
          1200: "var(--accent-1200)",
          1300: "var(--accent-1300)",
          1400: "var(--accent-1400)",
          1500: "var(--accent-1500)",
          1600: "var(--accent-1600)",
        },
        primary: {
          100: "var(--primary-100)",
          200: "var(--primary-200)",
          300: "var(--primary-300)",
          400: "var(--primary-400)",
          500: "var(--primary-500)",
          600: "var(--primary-600)",
          700: "var(--primary-700)",
          800: "var(--primary-800)",
          900: "var(--primary-900)",
          1000: "var(--primary-1000)",
          1100: "var(--primary-1100)",
          1200: "var(--primary-1200)",
          1300: "var(--primary-1300)",
          1400: "var(--primary-1400)",
          1500: "var(--primary-1500)",
          1600: "var(--primary-1600)",
        },
        secondary: {
          100: "var(--secondary-100)",
          200: "var(--secondary-200)",
          300: "var(--secondary-300)",
          400: "var(--secondary-400)",
          500: "var(--secondary-500)",
          600: "var(--secondary-600)",
          700: "var(--secondary-700)",
          800: "var(--secondary-800)",
          900: "var(--secondary-900)",
          1000: "var(--secondary-1000)",
          1100: "var(--secondary-1100)",
          1200: "var(--secondary-1200)",
          1300: "var(--secondary-1300)",
          1400: "var(--secondary-1400)",
          1500: "var(--secondary-1500)",
          1600: "var(--secondary-1600)",
        },
        success: {
          100: "var(--success-100)",
          200: "var(--success-200)",
          300: "var(--success-300)",
          400: "var(--success-400)",
          500: "var(--success-500)",
          600: "var(--success-600)",
          700: "var(--success-700)",
          800: "var(--success-800)",
          900: "var(--success-900)",
          1000: "var(--success-1000)",
          1100: "var(--success-1100)",
          1200: "var(--success-1200)",
          1300: "var(--success-1300)",
          1400: "var(--success-1400)",
          1500: "var(--success-1500)",
          1600: "var(--success-1600)",
        },
        info: {
          100: "var(--info-100)",
          200: "var(--info-200)",
          300: "var(--info-300)",
          400: "var(--info-400)",
          500: "var(--info-500)",
          600: "var(--info-600)",
          700: "var(--info-700)",
          800: "var(--info-800)",
          900: "var(--info-900)",
          1000: "var(--info-1000)",
          1100: "var(--info-1100)",
          1200: "var(--info-1200)",
          1300: "var(--info-1300)",
          1400: "var(--info-1400)",
          1500: "var(--info-1500)",
          1600: "var(--info-1600)",
        },
        warning: {
          100: "var(--warning-100)",
          200: "var(--warning-200)",
          300: "var(--warning-300)",
          400: "var(--warning-400)",
          500: "var(--warning-500)",
          600: "var(--warning-600)",
          700: "var(--warning-700)",
          800: "var(--warning-800)",
          900: "var(--warning-900)",
          1000: "var(--warning-1000)",
          1100: "var(--warning-1100)",
          1200: "var(--warning-1200)",
          1300: "var(--warning-1300)",
          1400: "var(--warning-1400)",
          1500: "var(--warning-1500)",
          1600: "var(--warning-1600)",
        },
        danger: {
          100: "var(--danger-100)",
          200: "var(--danger-200)",
          300: "var(--danger-300)",
          400: "var(--danger-400)",
          500: "var(--danger-500)",
          600: "var(--danger-600)",
          700: "var(--danger-700)",
          800: "var(--danger-800)",
          900: "var(--danger-900)",
          1000: "var(--danger-1000)",
          1100: "var(--danger-1100)",
          1200: "var(--danger-1200)",
          1300: "var(--danger-1300)",
          1400: "var(--danger-1400)",
          1500: "var(--danger-1500)",
          1600: "var(--danger-1600)",
        },
      },
      boxShadow: {
        "glow-md": "0rem 0rem 1rem -0.125rem rgba(255, 255, 255, 0.08);",
        "glow-lg": "0rem 0rem 4rem -0.5rem rgba(255, 255, 255, 0.08);",
      },
      dropShadow: {
        "glow-md": "0rem 0rem 2rem rgba(255, 255, 255, 0.2)",
        "glow-lg": "0rem 0rem 4rem rgba(255, 255, 255, 0.2)",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        lg: "2.5rem",
      },
      screens: {
        sm: "100%",
        md: "768px",
        lg: "1024px",
      },
    },
  },
  plugins: [],
};

module.exports = config;
