import swal from 'sweetalert2'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((app) => {
  console.log('[Plugin @nuxt/swal]: successfully registered')
  const sw = {
    def: swal,
    mx: swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: true,
      timer: 5000,
    }),
  }
  // console.log(`Swal instance created:`, sw.mx)

  app.provide('swal_mx', sw.mx)
  app.provide('swal', sw.def)
  // app.globalName = 'swal'
  app.vueApp.config.globalProperties.$_swal_mx = sw.mx
  app.vueApp.config.globalProperties.$_swal = sw.def
})
