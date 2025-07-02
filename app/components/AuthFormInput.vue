<script setup lang="ts">
import type { InputTypeHTMLAttribute } from 'vue';

const id = useId();

defineProps<{
  name?: string;
  type?: InputTypeHTMLAttribute;
  placeholder?: string;
  label: string;
  icon: string;
}>();

defineEmits<{
  (name: 'blur', ev: Event): void;
}>();

const value = defineModel<string>({ default: '' });
</script>

<template>
  <div class="space-y-2">
    <UiLabel :for="id">
      {{ label }}
    </UiLabel>
    <div class="relative">
      <NuxtIcon
        v-if="icon"
        :name="icon"
        class="absolute top-1/2 left-2 -translate-y-1/2"
      />
      <UiInput
        :id
        v-model="value"
        :name
        :type
        :placeholder
        class="pl-10"
        required
        @blur="$emit('blur', $event)"
      />
    </div>
  </div>
</template>

<style scoped>
</style>
