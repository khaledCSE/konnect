import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          100: '#A3E4C1', // Softer light green with a hint of freshness
          DEFAULT: '#28C76F', // Vibrant medium green, slightly greener than before
          600: '#038C4A', // Rich dark green for strong contrast
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
