import * as swal from 'sweetalert2'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((app) => {
  console.log('Plugin injected by @nuxt/swal!')
  const swalInstance = swal.default.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
  })
  app.provide('$swal', swalInstance)
  app.vueApp.config.globalProperties.$swal = swalInstance

  // app.globalName = 'swal'
  app.provide('swal', swalInstance)
})
