import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        'sf-mono': ['SF Mono', 'monospace', 'sans-serif'],
        montserrat: ['Montserrat'],
      },
      spacing: {
        85: '20.4375rem',
        25: '6.875rem',
      },
      screens: {
        '2xl': '1920px',
        '3xl': '2560px',
      },
      clipPath: {
        circle: 'circle(50%)',
        '85-percent': 'inset(0 0 15% 0)',
      },
    },
  },
  plugins: [],
};
export default config;
