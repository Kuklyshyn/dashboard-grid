export default defineNuxtConfig({
    ssr: false,
    components: [
        {
          path: '~/components',
          extensions: ['.vue'],
          pathPrefix: false,
        }
    ],
    modules: [
        '@nuxtjs/tailwindcss',
        '@vueuse/nuxt'
    ],
    css: [
        '@/assets/css/main.scss',
    ],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {}
        }
    }

})
