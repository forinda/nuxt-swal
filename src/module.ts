import { defineNuxtModule, addPlugin, createResolver, addComponentsDir } from '@nuxt/kit'
import type { NuxtSwalModuleOptions } from './types'

// Module options TypeScript interface definition
export default defineNuxtModule<NuxtSwalModuleOptions>({
  meta: {
    name: 'nuxt-swal',
    configKey: 'nuxt-swal',
  },
  // Default configuration options of the Nuxt module
  defaults: {
    componentPrefix: 'swal',
  },
  setup(_options, _app) {
    const resolver = createResolver(import.meta.url)

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve('./runtime/plugin'))
    addComponentsDir({ path: resolver.resolve('./runtime/components'),
      pathPrefix: false,
      prefix: _options.componentPrefix ?? 'swal',
      global: true,

    })
    _app.options.alias['nuxt-swal'] = resolver.resolve('./runtime')
    _app.options.css.push('sweetalert2/dist/sweetalert2.min.css')
  },
})
