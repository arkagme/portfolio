import type { Config } from 'tailwindcss';
import  defaultTheme  from 'tailwindcss/defaultTheme';
import typography from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}', './src/**/*.{md,svx}'],
  theme: {
    extend: {
      colors: {
        rosepine: {
          base: '#191724',
          surface: '#1f1d2e',
          overlay: '#26233a',
          muted: '#6e6a86',
          subtle: '#908caa',
          text: '#e0def4',
          love: '#eb6f92',
          gold: '#f6c177',
          rose: '#ebbcba',
          pine: '#31748f',
          foam: '#9ccfd8',
          iris: '#c4a7e7',
          highlightLow: '#21202e',
          highlightMed: '#403d52',
          highlightHigh: '#524f67',
        },
      },
      fontFamily: {
        sans: ['Figtree', ...defaultTheme.fontFamily.sans],
      },
      typography: (theme: any) => ({
        DEFAULT: {
          css: {
            color: theme('colors.rosepine.text'),
            h1: { color: theme('colors.rosepine.rose') },
            h2: { color: theme('colors.rosepine.gold') },
            h3: { color: theme('colors.rosepine.foam') },
            h4: { color: theme('colors.rosepine.iris') },
            strong: { color: theme('colors.rosepine.text') },
            a: { color: theme('colors.rosepine.love') },
            code: { color: theme('colors.rosepine.pine') },
            blockquote: { borderLeftColor: theme('colors.rosepine.highlightMed') },
          },
        },
      }),
    },
  },
  plugins: [
    typography,
  ],
} satisfies Config;
