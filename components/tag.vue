<template>
  <div
    :style="{
      backgroundColor:
        selected !== undefined
          ? selected
            ? backgroundColor
            : '#000000'
          : backgroundColor,
      color: textColor
    }"
    class="px-3 py-1 rounded-full text-xs font-mono m-1 select-none font-bold"
    @click="$emit('clicked')"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
defineProps({
  backgroundColor: {
    type: String,
    default: "#000000"
  },
  selected: {
    type: Boolean,
    default: undefined
  },
  textColor: {
    type: String,
    default: "#ffffff"
  }
});

defineEmits(["clicked"]);
</script>
