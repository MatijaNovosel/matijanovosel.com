<template>
  <div
    :style="{
      backgroundColor:
        selected !== undefined
          ? selected
            ? backgroundColor
            : '#121111'
          : backgroundColor
    }"
    class="px-3 py-1 rounded-full text-xs font-mono m-1 select-none"
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
    required: false,
    default: undefined
  }
});

defineEmits(["clicked"]);
</script>
