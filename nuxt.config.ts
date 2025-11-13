// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      titleTemplate: '%s - Web-Tech-TW',
      title: 'Web Tech TW',
    }
  },

  compatibilityDate: '2025-07-15',

  devtools: { enabled: true },
  nitro: { preset: 'bun' },

  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/ui',
    '@nuxt/test-utils'
  ],

  runtimeConfig: {
    public: {
      homeInteHost: process.env.NUXT_PUBLIC_HOME_INTE_HOST || 'https://web-tech.tw',
      saraInteHost: process.env.NUXT_PUBLIC_SARA_INTE_HOST || 'https://web-tech.tw/sara',
      saraTokenName: process.env.NUXT_PUBLIC_SARA_TOKEN_NAME || 'unified_token',
    }
  }
})
