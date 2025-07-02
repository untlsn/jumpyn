import tailwindcss from '@tailwindcss/vite';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/test-utils',
    '@nuxt/scripts',
    'shadcn-nuxt',
    '@nuxtjs/color-mode',
  ],
  imports: {
    presets: [{
      from: '@tanstack/vue-form',
      imports: [{ name: 'useForm', as: 'useTanstackForm' }],
    }],
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  colorMode: {
    preference: 'system',
    classSuffix: '',
  },
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2025-05-15',
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  eslint: {
    config: {
      stylistic: {
        semi: true,
      },
    },
  },
  icon: {
    componentName: 'NuxtIcon',
  },
  shadcn: {
    prefix: 'Ui',
    componentDir: './app/components/ui',
  },
});
