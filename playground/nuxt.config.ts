export default defineNuxtConfig({

  'compatibilityDate': '2025-01-25',
  'devtools': { enabled: true },
  'modules': [
    '../src/module',
    '@nuxtjs/tailwindcss',
  ],
  'nuxt-swal': {
    componentPrefix: 'sw',
  },
})
