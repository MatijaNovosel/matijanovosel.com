<template>
  <nuxt-link :to="link">
    <button
      class="dev-to-btn px-3 py-1 text-xl md:text-4xl text-black bg-white flex-center uppercase ripple"
    >
      <icon-dev-to />
    </button>
  </nuxt-link>
</template>

<script lang="ts" setup>
import IconDevTo from "~icons/material-symbols/logo-dev";

defineProps<{
  link: string;
}>();
</script>

<style lang="css" scoped>
.dev-to-btn {
  border-top-left-radius: 12px;
}
</style>
