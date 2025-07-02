<script setup lang="ts">
import type { HTMLAttributes } from 'vue';
import type { ButtonVariants } from './ui/button';
import { buttonVariants } from './ui/button';
import type { NuxtLinkProps } from '#app';

interface Props extends NuxtLinkProps {
  variant?: ButtonVariants['variant'];
  size?: ButtonVariants['size'];
  class?: HTMLAttributes['class'];
}

const props = defineProps<Props>();

const drill = () => {
  const { class: _, ...rest } = props;
  return rest;
};
</script>

<template>
  <NuxtLink
    :class="cn(buttonVariants({ variant, size }), props.class)"
    v-bind="drill()"
  ><slot /></NuxtLink>
</template>

<style scoped>
</style>
