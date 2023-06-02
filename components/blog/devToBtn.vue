<template>
  <nuxt-link :to="link">
    <button
      class="px-3 py-1 text-xl md:text-4xl text-black bg-white rounded flex-center uppercase ripple"
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
