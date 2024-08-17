import type {Config} from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          background: '#000000',
          text: '#FFFFFF',
          gray: {
            dark: '#2F3336',
            light: '#71767B',
          },
        },
        light: {
          background: '#FFFFFF',
          text: '#0F1419',
          gray: {
            dark: '#536471',
            light: '#EFF3F4',
          },
        },
      },
      backgroundImage: {
        'soft-blue-gradient': 'linear-gradient(to right, #e6f2ff, #b3d9ff)',
      },
    },
  },
  plugins: [],
};
export default config;
