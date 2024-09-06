import type { Config } from 'tailwindcss'
import { withTV } from 'tailwind-variants/transformer'

export default withTV({
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    '../../packages/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {}
  },
  plugins: [],
  important: true
} satisfies Config)
