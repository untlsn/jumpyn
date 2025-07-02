<script setup lang="ts">
import { authClient, BetterAuthAuthError } from '~/lib/auth-client';

type LoginFormValues = {
  email: string;
  password: string;
};

const { mutate, status, error } = useTanstackMutation({
  mutationKey: ['auth', 'register'],
  async mutationFn(value: LoginFormValues) {
    const { data, error } = await authClient.signIn.email({
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
  } as LoginFormValues,
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
        Sign In
      </UiButton>
      <p
        v-if="error"
        class="text-destructive text-center"
      >
        {{ error.message }}
      </p>
      <NuxtLink
        to="/auth/password-reset"
        class="text-muted-foreground text-center hover:underline"
      >
        Forgot password?
      </NuxtLink>
      <p class="text-center text-muted-foreground">
        <span>Don't have an account?</span>
        <snap class="hover:underline">
          <NuxtLink
            to="/auth/register"
            class="block bg-clip-text text-transparent bg-gradient-to-r from-vibrant-from to-vibrant-pink text-balance text-center"
          >
            Sign Up
          </NuxtLink>
        </snap>
      </p>
    </form>
  </UiCard>
</template>
