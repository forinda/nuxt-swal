<template>
  <div>
    Nuxt module playground!
    <swal-pop
      :message="'My message'"
      @send-message="sendMessage"
    />
    <swal-pop
      :message="'My message2'"
      @send-message="sendMessage"
    />
  </div>
</template>

<script setup lang="ts">
const { $swal } = useNuxtApp()

const sendMessage = (message: string) => {
  console.log({ $swal })

  $swal.fire({
    title: 'Message received',
    text: message,
    icon: 'success',
  })
  console.log('Received message:', message)
}
</script>
<!-- <script>
export default {

  data() {
    return {
      message: 'My message',
    }
  },

  methods: {
    sendMessage(message) {
      console.log({ $swal: this.$swal })

      this.$swal.fire({
        title: 'Message received',
        text: message,
        icon: 'success',
      })
      console.log('Received message:', message)
    },
  },
}
</script> -->
