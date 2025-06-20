<script setup lang="ts">
const count = ref(0);
</script>

<template>
  <div class="min-h-screen grid place-items-center">
    <UiButton @click="count++">
      Increment
    </UiButton>
    <p>
      {{ count }}
    </p>
  </div>
</template>

<style scoped>
</style>
