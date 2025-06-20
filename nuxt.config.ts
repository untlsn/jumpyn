// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/test-utils',
    '@nuxt/scripts',
  ],
  devtools: { enabled: true },
  compatibilityDate: '2025-05-15',
  eslint: {
    config: {
      stylistic: {
        semi: true,
      },
    },
  },
});
