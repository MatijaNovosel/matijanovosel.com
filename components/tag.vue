<template>
  <div
    :style="{
      backgroundColor
    }"
    class="px-3 py-1 rounded-md text-xs font-mono m-1"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
defineProps({
  backgroundColor: {
    type: String,
    default: "#000000"
  }
});
</script>
