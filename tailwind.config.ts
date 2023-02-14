import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
    content: [
      './assets/**/*.{vue,js,css}',
      './components/**/*.{vue,js}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.{js,ts}',
      './nuxt.config.{js,ts}',
    ],
    theme: {
        extend: {
          colors: {
            'cc-pink': '#FB2E86',
            'cc-red': '#FB2448',
            'cc-blue': {
              100: '#F3F9FF',
              200: '#3F509E',
              300: '#2F1AC4',
              400: '#151875'
            },
            'cc-purple': {
              100: '#E0D3F5',
              200: '#9F63B5',
              300: '#7E33E0'
            }
          },
          fontFamily: {
            roboto: ['Inter']
          }
        }
    }
}
