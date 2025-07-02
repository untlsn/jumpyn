<script setup lang="ts">
import { authClient, BetterAuthAuthError } from '~/lib/auth-client';

type RegisterFormValues = {
  name: string;
  email: string;
  password: string;
};

const { mutate, status, error } = useTanstackMutation({
  mutationKey: ['auth', 'register'],
  async mutationFn(value: RegisterFormValues) {
    const { data, error } = await authClient.signUp.email({
      name: value.name,
      email: value.email,
      password: value.password,
    });
    if (error) throw new BetterAuthAuthError(error);
    return data;
  },
  onSuccess() {
    navigateTo('/');
  },
});

const disabled = computed(() => status.value === 'pending' || status.value == 'success');

const form = useTanstackForm({
  defaultValues: {
    name: '',
    email: '',
    password: '',
  } as RegisterFormValues,
  onSubmit({ value }) {
    mutate(value);
  },
});
</script>

<template>
  <UiCard class="mx-auto w-120 p-8 mt-20">
    <AuthFormTitle
      title="Welcome Back"
      description="Sign in to your account to continue"
    />
    <form
      class="contents"
      novalidate
      @submit.prevent.stop="form.handleSubmit"
    >
      <form.Field
        v-slot="{ field }"
        name="name"
      >
        <AuthFormInput
          label="Name"
          v-bind="formatToAuthFormInputProps(field)"
          icon="lucide:user"
        />
      </form.Field>
      <form.Field
        v-slot="{ field }"
        name="email"
      >
        <AuthFormInput
          label="Email"
          v-bind="formatToAuthFormInputProps(field)"
          type="email"
          icon="lucide:mail"
        />
      </form.Field>
      <form.Field
        v-slot="{ field }"
        name="password"
      >
        <AuthFormInput
          label="Password"
          type="password"
          v-bind="formatToAuthFormInputProps(field)"
          icon="lucide:lock"
        />
      </form.Field>
      <UiButton
        type="submit"
        variant="vibrant"
        :disabled
      >
        Sign Up
      </UiButton>
      <p
        v-if="error"
        class="text-destructive text-center"
      >
        {{ error.message }}
      </p>
      <p class="text-center text-muted-foreground">
        <span>Already have an account?</span>
        <snap class="hover:underline">
          <NuxtLink
            to="/auth/login"
            class="block bg-clip-text text-transparent bg-gradient-to-r from-vibrant-from to-vibrant-pink text-balance text-center"
          >
            Sign In
          </NuxtLink>
        </snap>
      </p>
    </form>
  </UiCard>
</template>

<style scoped>
</style>
