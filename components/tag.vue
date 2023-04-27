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
    class="px-3 rounded-full text-xl m-1 select-none tracking-widest"
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
