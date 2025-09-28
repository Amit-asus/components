import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Brand Colors from your settings
        "angular-red": "#dd0531",
        "azure-blue": "#007fff",
        "javascript-yellow": "#f9e64f",
        "mandalorian-blue": "#1857a4",
        "node-green": "#215732",
        "react-blue": "#61dafb",
        "something-different": "#832561",
        "svelte-orange": "#ff3d00",
        "vue-green": "#42b883",

        // Extended palette
        emerald: "#10b981",
        purple: "#8b5cf6",
        pink: "#ec4899",
        indigo: "#6366f1",
        teal: "#14b8a6",
        amber: "#f59e0b",
        rose: "#f43f5e",
        cyan: "#06b6d4",
        lime: "#84cc16",
        violet: "#7c3aed",

        // Semantic colors
        success: "#10b981",
        warning: "#f59e0b",
        error: "#dd0531",
        info: "#007fff",

        // Custom grays for better contrast
        gray: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        },
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #61dafb, #007fff)",
        "gradient-secondary": "linear-gradient(135deg, #42b883, #10b981)",
        "gradient-accent": "linear-gradient(135deg, #ff3d00, #f59e0b)",
        "gradient-purple": "linear-gradient(135deg, #8b5cf6, #7c3aed)",
        "gradient-warm": "linear-gradient(135deg, #dd0531, #f43f5e)",
        "gradient-cool": "linear-gradient(135deg, #1857a4, #6366f1)",
        "gradient-sunset": "linear-gradient(135deg, #f9e64f, #ff3d00)",
        "gradient-nature": "linear-gradient(135deg, #215732, #84cc16)",
      },
      boxShadow: {
        brand: "0 4px 14px 0 rgba(97, 218, 251, 0.25)",
        "brand-lg": "0 10px 25px 0 rgba(97, 218, 251, 0.3)",
        azure: "0 4px 14px 0 rgba(0, 127, 255, 0.25)",
        vue: "0 4px 14px 0 rgba(66, 184, 131, 0.25)",
        angular: "0 4px 14px 0 rgba(221, 5, 49, 0.25)",
      },
      animation: {
        "pulse-brand": "pulse-brand 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "bounce-brand": "bounce-brand 1s infinite",
      },
      keyframes: {
        "pulse-brand": {
          "0%, 100%": {
            opacity: "1",
            boxShadow: "0 0 0 0 rgba(97, 218, 251, 0.7)",
          },
          "50%": {
            opacity: ".8",
            boxShadow: "0 0 0 10px rgba(97, 218, 251, 0)",
          },
        },
        "bounce-brand": {
          "0%, 100%": {
            transform: "translateY(-25%)",
            animationTimingFunction: "cubic-bezier(0.8,0,1,1)",
          },
          "50%": {
            transform: "none",
            animationTimingFunction: "cubic-bezier(0,0,0.2,1)",
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

