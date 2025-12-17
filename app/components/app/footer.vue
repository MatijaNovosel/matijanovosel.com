<template>
  <footer
    class="w-full flex items-center justify-between z-2 px-1 md:px-0 user-select-none pt-10 pb-5"
  >
    <div>
      <span class="text-md text-gray-500">
        &copy; Matija Novosel {{ new Date().getFullYear() }}
      </span>
    </div>
    <div class="flex-center text-gray-700">
      <nuxt-link to="https://github.com/MatijaNovosel">
        <icon-github />
      </nuxt-link>
      <nuxt-link class="px-1" to="mailto:mnovosel5@gmail.com">
        <icon-email />
      </nuxt-link>
      <nuxt-link to="https://www.linkedin.com/in/matijanovosel/">
        <icon-linkedin />
      </nuxt-link>
    </div>
  </footer>
</template>

<script setup lang="ts">
import IconEmail from "~icons/mdi/email";
import IconGithub from "~icons/mdi/github";
import IconLinkedin from "~icons/mdi/linkedin";
</script>

<style scoped>
a {
  @apply flex items-center;
  font-size: 1.3em;
}
</style>
