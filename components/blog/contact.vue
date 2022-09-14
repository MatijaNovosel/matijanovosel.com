<template>
  <div class="mt-4">
    <span class="font-bold pt-5 text-xl"> Contact </span>
    <div class="flex flex-col mt-2 text-gray-400">
      <span> Zagreb, Croatia </span>
      <span> mnovosel5@gmail.com </span>
      <div class="mt-5">
        <a class="text-white" href="https://github.com/MatijaNovosel">
          <IconGithub :style="{ fontSize: '1.6em' }" />
        </a>
        <a class="ml-2" href="https://www.linkedin.com/in/matijanovosel/">
          <IconLinkedin :style="{ fontSize: '1.6em' }" />
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import IconLinkedin from "~icons/logos/linkedin-icon";
import IconGithub from "~icons/mdi/github";
</script>
