import type Swal from 'sweetalert2'

// declare namespace NuxtApp {
//   export interface Context {
//     $swal: typeof Swal
//   }
// }
interface SwalNuxtOptions {
  $swal: typeof Swal
}

declare module '@nuxt/types' {
  interface NuxtAppOptions extends SwalNuxtOptions {
    // nuxt-sw options
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $swal: typeof Swal
  }
}
