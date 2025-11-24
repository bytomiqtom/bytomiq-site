/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}",
    ],
    theme: {
      extend: {
        colors: {
          bytomiq: {
            bg: "#1a1a1a7",          // page background (near-black)
            surface: "#020617",     // panels / cards
            surfaceAlt: "#020617",  // alt panels if you want later
            primary: "#9b5de5",     // Purple
            secondary: "#0eb3f7",   // Blue
            accent: "#fafbfc",      // warm accent (CTA hover, chips)
            border: "#fafbfc",      // subtle border
            muted: "#fafbfc",       // body copy / secondary text
          },
        },
        fontFamily: {
          // Bytomiq uses Monda as primary brand font
          sans: ["Monda", "system-ui", "sans-serif"],
          display: ["Monda", "system-ui", "sans-serif"],
          mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
        },
        boxShadow: {
          glow: "0 0 40px rgba(34, 211, 238, 0.35)", // cyan glow
        },
        borderRadius: {
          "2xl": "1.25rem",
          "3xl": "1.75rem",
        },
      },
    },
    plugins: [],
  };
  
  