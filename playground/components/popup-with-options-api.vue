<template>
  <lazy-sw-swal-pop
    :message="message"
    class="p-6 bg-red-400 rounded-xl shadow-md w-full"
    @send-message="sendMessage"
  />
</template>

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
