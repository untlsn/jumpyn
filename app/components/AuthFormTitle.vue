<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
}>();
</script>

<template>
  <UiCardHeader class="text-center">
    <div class="flex items-center justify-center space-x-2 mb-4">
      <NuxtImg
        src="/logo.webp"
        alt="Jumpyn Logo"
        width="32"
        height="32"
      />
      <span class="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
        Jumpyn
      </span>
    </div>
    <UiCardTitle class="text-2xl font-bold">
      {{ title }}
    </UiCardTitle>
    <UiCardDescription>
      {{ description }}
    </UiCardDescription>
  </UiCardHeader>
</template>

<style scoped>
</style>
