<template>
  <NuxtLink to="/blog">
    <button
      class="ripple project-btn pr-3 pl-2 py-1 font-medium text-xl text-gray-100 rounded flex items-center justify-center"
    >
      <IconArrowLeft class="mr-2" />
      <h6>Back</h6>
    </button>
  </NuxtLink>
</template>

<script lang="ts" setup>
import IconArrowLeft from "~icons/mdi/arrow-left";
</script>
