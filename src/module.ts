import { defineNuxtModule, addPlugin, createResolver, addComponentsDir } from '@nuxt/kit'
import * as swal from 'sweetalert2'

// Module options TypeScript interface definition
export interface ModuleOptions {
  componentPrefix?: string
  // autoImport?: boolean
}
// swal.default.mixin({

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: '@nuxt/swal',
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
    _app.options.alias['@nuxt/swal'] = resolver.resolve('./runtime')
    _app.options.css.push('sweetalert2/dist/sweetalert2.min.css')
  },
})
