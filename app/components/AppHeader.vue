<script setup lang="ts">
const colorMode = useColorMode();

const switchPreference = () => {
  colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark';
};
</script>

<template>
  <header class="px-4 py-2 border-b-2 flex justify-between items-center">
    <p class="flex items-center gap-2 font-bold text-2xl">
      <NuxtImg
        src="/logo.webp"
        alt="Jumpyn Logo"
        width="32"
        height="32"
      />
      Jumpyn
    </p>
    <div>
      <UiButton
        variant="outline"
        size="icon"
        @click="switchPreference"
      >
        <NuxtIcon
          v-if="colorMode.preference === 'light'"
          class="go-from-top"
          name="lucide:sun"
        />
        <NuxtIcon
          v-else
          class="go-from-bottom"
          name="lucide:moon"
        />
      </UiButton>
    </div>
  </header>
</template>

<style scoped>
@keyframes go-from-top {
  from {
    transform: translateY(-10px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.go-from-top {
  animation: go-from-top 0.3s ease-in-out;
}

@keyframes go-from-bottom {
  from {
    transform: translateY(10px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.go-from-bottom {
  animation: go-from-bottom 0.3s ease-in-out;
}
</style>
