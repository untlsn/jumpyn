<script setup lang="ts">
const form = useTanstackForm({
  defaultValues: {
    email: '',
    password: '',
  },
  onSubmit(values) {
    console.log(values);
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
      >
        Sign In
      </UiButton>
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
