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
