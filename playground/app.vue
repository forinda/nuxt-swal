<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
    <div class="max-w-4xl text-center p-6 bg-white shadow-md rounded-xl">
      <h1 class="text-3xl font-bold mb-4 text-gray-900">
        Vue 3 Playground with TypeScript and Nuxt.js
      </h1>
      <p class="text-lg text-gray-700 mb-6">
        Explore the power of <code class="px-2 py-1 bg-gray-200 rounded"> nuxt-swal </code>
        using the Composition API and Options API.
      </p>
    </div>

    <div class="mt-8 space-y-6 w-full max-w-lg">
      <div class="p-6 bg-white rounded-xl shadow-md">
        <h2 class="text-xl font-semibold text-gray-800 mb-4">
          Options API Popup
        </h2>
        <popup-with-options-api />
      </div>

      <div class="p-6 bg-white rounded-xl shadow-md">
        <h2 class="text-xl font-semibold text-gray-800 mb-4">
          Composition API Popup
        </h2>
        <popup-with-composition />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Scoped styling is not required here since Tailwind handles all the styles */
</style>
