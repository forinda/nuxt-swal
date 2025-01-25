<template>
  <div>basic</div>
  <swal-pop
    :message="message"
    class="p-6 bg-green-400 rounded-xl shadow-md w-full"
    @send-message="sendMessage"
  />
</template>

<script setup>
const app = useNuxtApp()
const message = 'Message with Composition API'
const sendMessage = (message) => {
  app.$swal_mx.fire({
    title: 'Message received',
    text: message,
    icon: 'success',
  })
  console.log('Received message:', message)
}
</script>
