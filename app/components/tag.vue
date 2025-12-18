<template>
  <div
    :style="{
      backgroundColor:
        selected !== undefined
          ? selected
            ? backgroundColor
            : '#000000'
          : backgroundColor,
      color: textColor || '#fff'
    }"
    class="px-2 py-0.5 rounded-md text-xs select-none tracking-widest"
    @click="$emit('clicked')"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  backgroundColor?: string;
  textColor?: string;
  selected?: boolean;
}>();

defineEmits(["clicked"]);
</script>
