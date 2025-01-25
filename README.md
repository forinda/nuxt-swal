<!--
Get your module up and running quickly.

Find and replace all on all files (CMD+SHIFT+F):
- Name: @nuxt/swal
- Package name: @nuxt/swal
- Description: @nuxt/swal is a sweetalert2 plugin for nuxtjs
-->

# @nuxt/swal

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

`@nuxt/swal` Is an extension on use of sweat alert for displaying notifications on nuxt applications

[✨ &nbsp;Release Notes](/CHANGELOG.md)
<!-- - [🏀 Online playground](https://stackblitz.com/github/your-org/@nuxt/swal?file=playground%2Fapp.vue) -->
<!-- - [📖 &nbsp;Documentation](https://example.com) -->

## Features

<!-- Highlight some of the features your module provide here -->
- ⛰ &nbsp;Sweatalert2 Notifications
- 🚠 &nbsp;Global alert methods
- 🌲 &nbsp;Easy to extend functionalities

## Quick Setup

Install the module to your Nuxt application with one command:

```bash
npx nuxi module add @nuxt/swal
```

That's it! You can now use @nuxt/swal in your Nuxt app ✨

Add `@nuxt/swal` to modules section of `nuxt.config.js` if not there

```ts
{
  modules: ['@nuxt/swal']
}
```

# Usage

<details>
  <summary>How to use the package</summary>

In composition API we have these two properties

- `$swal` - A Swal instance
- `$swal_mx` - A Swal Mixin instance

When using Options API all the properties injected in the app will be available plus other options

- `$swal`/`$_swal` - A Swal instance
- `$swal_mx`/`$_swal_mx` - A Swal Mixin instance

All the bove provide sweet alert popups and for more on how to use the sweet alert you can reference
[Sweet Alert 2 Docs](https://sweetalert2.github.io/)

## Composition API

```vue
<template>
  <sw-swal-pop
    :message="message"
    class="p-6 bg-green-400 rounded-xl shadow-md w-full"
    @send-message="sendMessage"
  />
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  message?: string
}>(), {
  message: 'Message with Composition API',
})
const app = useNuxtApp()
const sendMessage = (message: string) => {
  app.$swal_mx.fire({
    title: 'Message received',
    text: message,
    icon: 'success',
  })
  console.log('Received message:', message)
}
</script>

<style lang="scss" scoped>

</style>
```

## Options API

```vue
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    message: {
      type: String,
      default: 'Message with Options API',
      required: false,
    },
  },
  setup() {
    return {}
  },
  data() {
    return {

    }
  },
  methods: {
    async sendMessage(message: string) {
      const { value } = await this.$swal.fire<{ value: string }>({
        title: 'Input email address',
        input: 'email',
        inputLabel: 'Your email address',
        inputPlaceholder: 'Enter your email address',
        position: 'center',
        footer: 'This is a footer',
        timerProgressBar: true,
        timer: 5000,
        toast: true,
      })
      console.log('Received message:', message, 'and email:', value)
    },
  },
})
</script>

<style scoped>

</style>
```

</details>

## Contribution

<details>
  
  <summary>Local development</summary>
  
  ```bash
  # Install dependencies
  npm install
  
  # Generate type stubs
  npm run dev:prepare
  
  # Develop with the playground
  npm run dev
  
  # Build the playground
  npm run dev:build
  
  # Run ESLint
  npm run lint
  
  # Run Vitest
  npm run test
  npm run test:watch
  
  # Release new version
  npm run release
  ```

</details>

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@nuxt/swal/latest.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/@nuxt/swal

[npm-downloads-src]: https://img.shields.io/npm/dm/@nuxt/swal.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npm.chart.dev/@nuxt/swal

[license-src]: https://img.shields.io/npm/l/@nuxt/swal.svg?style=flat&colorA=020420&colorB=00DC82
[license-href]: https://npmjs.com/package/@nuxt/swal

[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js
[nuxt-href]: https://nuxt.com
