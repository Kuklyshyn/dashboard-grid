export default defineNuxtConfig({
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
    build: {
        postcss: {
            plugins: {
                tailwindcss: {},
                autoprefixer: {}
            }
        }
    },
    buildModules: [
        '@nuxt/postcss8'
    ],

})
