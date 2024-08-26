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
      fontFamily: {
        sans: ['var(--font-noto-sans-kr)'],
      },
      width: {
        78: '18.5rem',
      },
      colors: {
        dark: {
          background: '#04080D',
          modalBg: 'rgba(91, 112, 131, 0.4)',
          text: '#E2EAF1',
          subText: '#828B96',
          gray: {
            dark: '#2F3336',
            light: '#71767B',
          },
        },
        light: {
          background: '#FFFFFF',
          text: '#24292F',
          gray: {
            dark: '#536471',
            light: '#EFF3F4',
          },
        },
        button: {
          blue: '#1B90EE',
          green: '#298E46',
          lightGreen: '#2ECC71',
        },
      },
      backgroundImage: {
        'soft-blue-gradient': 'linear-gradient(to right, #e6f2ff, #b3d9ff)',
      },
    },
  },
  layers: {
    components: ['components'],
  },
  plugins: [],
};
export default config;
