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
      puce: {
        DEFAULT: '#D88C9A',
      },
      orange: {
        DEFAULT: '#F2D0A9',
      },
      almond: {
        DEFAULT: '#F1E3D3',
      },
      cambridge: {
        DEFAULT: '#99C1B9',
      },
      indigo: {
        DEFAULT: '#8E7DBE',
      },
    }
  },
  plugins: [],
}
export default config
