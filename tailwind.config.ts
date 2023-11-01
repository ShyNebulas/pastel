import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // https://coolors.co/d88c9a-f2d0a9-f1e3d3-99c1b9-8e7dbe
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: {
        DEFAULT: '#FFF',
        dark: '#CCCCCC',
      },
      puce: {
        light: '#CB677B',
        DEFAULT: '#D88C9A',
        dark: '#C1495F',
      },
      orange: {
        DEFAULT: '#F2D0A9',
        dark: '#E7A85F',
      },
      almond: {
        DEFAULT: '#F1E3D3',
      },
      cambridge: {
        light: '#A6C9C2',
        DEFAULT: '#99C1B9',
        dark: '#5D988C',
      },
      slate: {
        DEFAULT: '#255957',
      },
      indigo: {
        light: '#BAAED6',
        DEFAULT: '#8E7DBE',
        dark: '#564488',
      },
      blue: {
        DEFAULT: '#005FCC',
      },
      gray: {
        DEFAULT: '#76818E',
        dark: '#49515A',
      }
    }
  },
  plugins: [],
}
export default config
