<template>
  <footer
    class="w-full flex justify-between z-2 md:pb-5 pt-7 px-1 md:px-0 user-select-none"
  >
    <div>
      <span class="text-sm md:text-base">
        &copy; Matija Novosel {{ new Date().getFullYear() }}
      </span>
    </div>
    <div>
      <a class="text-white" href="https://github.com/MatijaNovosel">
        <IconGithub :style="{ fontSize: '1.3em' }" />
      </a>
      <a class="text-white px-1" href="https://dev.to/matijanovosel">
        <IconDevTo :style="{ fontSize: '1.3em' }" />
      </a>
      <a class="pr-1" href="mailto:mnovosel5@gmail.com">
        <IconEmail :style="{ fontSize: '1.3em' }" />
      </a>
      <a href="https://www.linkedin.com/in/matijanovosel/">
        <IconLinkedin :style="{ fontSize: '1.3em' }" />
      </a>
    </div>
  </footer>
</template>

<script setup lang="ts">
import IconLinkedin from "~icons/mdi/linkedin";
import IconGithub from "~icons/mdi/github";
import IconDevTo from "~icons/material-symbols/logo-dev";
import IconEmail from "~icons/mdi/email";
</script>
