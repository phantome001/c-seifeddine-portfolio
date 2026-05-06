import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#020712",
          900: "#06101f",
          800: "#0a172b"
        },
        neon: {
          blue: "#1688ff",
          cyan: "#20d8ff",
          teal: "#16f2c5",
          purple: "#8a5cff"
        }
      },
      boxShadow: {
        glow: "0 0 36px rgba(32, 216, 255, 0.22)",
        "glow-purple": "0 0 42px rgba(138, 92, 255, 0.24)",
        "inner-line": "inset 0 1px 0 rgba(255,255,255,0.08)"
      },
      backgroundImage: {
        "mesh-dark":
          "linear-gradient(135deg, rgba(2,7,18,1) 0%, rgba(6,16,31,0.96) 44%, rgba(9,14,31,1) 100%)",
        "neon-line":
          "linear-gradient(90deg, rgba(32,216,255,0), rgba(32,216,255,0.86), rgba(138,92,255,0))"
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        pulseGlow: "pulseGlow 4s ease-in-out infinite"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" }
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.68", filter: "blur(0px)" },
          "50%": { opacity: "1", filter: "blur(1px)" }
        }
      }
    }
  },
  plugins: []
};

export default config;
