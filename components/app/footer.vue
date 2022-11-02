<template>
  <footer
    class="w-full flex items-center justify-between z-2 md:pb-5 pt-7 px-1 md:px-0 user-select-none"
  >
    <div>
      <span class="text-sm md:text-base">
        &copy; Matija Novosel {{ new Date().getFullYear() }}
      </span>
    </div>
    <div class="flex-center">
      <NuxtLink to="https://github.com/MatijaNovosel">
        <IconGithub />
      </NuxtLink>
      <NuxtLink class="text-white px-1" to="https://dev.to/matijanovosel">
        <IconDevTo />
      </NuxtLink>
      <NuxtLink class="pr-1" to="mailto:mnovosel5@gmail.com">
        <IconEmail />
      </NuxtLink>
      <NuxtLink to="https://www.linkedin.com/in/matijanovosel/">
        <IconLinkedin />
      </NuxtLink>
    </div>
  </footer>
</template>

<script setup lang="ts">
import IconLinkedin from "~icons/mdi/linkedin";
import IconGithub from "~icons/mdi/github";
import IconDevTo from "~icons/material-symbols/logo-dev";
import IconEmail from "~icons/mdi/email";
</script>

<style scoped>
a {
  @apply flex items-center;
  font-size: 1.3em;
}
</style>
