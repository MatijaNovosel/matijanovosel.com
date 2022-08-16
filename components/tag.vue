<template>
  <span
    :style="{
      backgroundColor
    }"
    class="mr-1 px-3 py-1 rounded-md text-xs font-mono"
  >
    <slot />
  </span>
</template>

<script lang="ts" setup>
defineProps({
  backgroundColor: {
    type: String,
    default: "#000000"
  }
});
</script>
