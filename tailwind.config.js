/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        amethyst: {
          950: '#07040F',
          900: '#0F0821',
          850: '#180E33',
          800: '#231548',
          700: '#321D66',
        },
        neonCyan: {
          300: '#67E8F9',
          400: '#22D3EE',
          500: '#06B6D4',
          600: '#0891B2',
          glow: 'rgba(34, 211, 238, 0.35)',
        },
        neonMagenta: {
          400: '#F472B6',
          500: '#EC4899',
          600: '#DB2777',
          glow: 'rgba(236, 72, 153, 0.35)',
        },
        cyberPurple: {
          400: '#C084FC',
          500: '#A855F7',
          600: '#9333EA',
        }
      },
      fontFamily: {
        display: ['Syne', 'Outfit', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-cyan-magenta': 'linear-gradient(135deg, #22D3EE 0%, #A855F7 50%, #EC4899 100%)',
        'gradient-holographic': 'linear-gradient(90deg, #22D3EE 0%, #EC4899 50%, #A855F7 100%)',
        'cyber-violet-mesh': 'radial-gradient(ellipse at top left, rgba(168, 85, 247, 0.25) 0%, transparent 60%), radial-gradient(ellipse at bottom right, rgba(34, 211, 238, 0.25) 0%, transparent 60%)',
      },
    },
  },
  plugins: [],
}
