import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "background-lighter": "var(--primary-color-lighter)",
        "background-light": "var(--primary-color-light)",
        background: "var(--primary-color-bg)",
        "gradient-start": "var(--gradient-start)",
        "gradient-end": "var(--gradient-end)",
        "gradient-yellow": "var(--gradient-yellow)"
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        spining: "spin 10s linear infinite",
        zoomIn: "scaleIn 1s ease-in",
        'gradientBorder': 'rotation 5s linear infinite'
      },
      keyframes: {
        scaleIn: {
          from: { 'scale': '0' },
          to: {
            'scale': '1',

          }
        },
        rotation: {
          '0%': {
            '--gradient-angle': '0deg'
          },
          '100%': {
            '--gradient-angle': '360deg'
          }
        }
      }

    },
  },
  plugins: [],
}
export default config
