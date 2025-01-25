/* eslint-disable @typescript-eslint/no-empty-object-type */
import type Swal from 'sweetalert2'

type SwalType = typeof Swal
type SwalInstance = ReturnType<typeof Swal.mixin>

// type SwalInstance = InstanceType
declare module '@nuxt/swal' {
  export interface SwalPopupProps {
    message: string
  }
}
interface NuxtAppSwalModuleOptions {
  $swal: SwalType
  $swal_mx: SwalInstance
}

interface VueSwalModuleOptions {
  $_swal: SwalType
  $_swal_mx: SwalInstance
}
declare module '#app' {

  interface NuxtApp extends NuxtAppSwalModuleOptions { }
}

declare module 'nuxt/dist/app/nuxt' {
  interface NuxtApp extends NuxtAppSwalModuleOptions { }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties extends VueSwalModuleOptions, NuxtAppSwalModuleOptions { }
}

export interface NuxtSwalModuleOptions {
  componentPrefix?: string
  // autoImport?: boolean
}
