<template>
  <nuxt-link to="/blog">
    <button
      class="pr-3 pl-2 py-1 text-3xl text-black bg-white rounded flex-center"
    >
      <icon-arrow-left class="mr-2 text-xl" />
      Back
    </button>
  </nuxt-link>
</template>

<script lang="ts" setup>
import IconArrowLeft from "~icons/mdi/arrow-left";
</script>
