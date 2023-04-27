<template>
  <div :style="style" />
</template>

<script lang="ts" setup>
const props = defineProps<{
  radius?: number;
  color?: string;
}>();

const style = computed(() => ({
  backgroundColor: props.color || "#fff",
  width: `${props.radius || 10}px`,
  height: `${props.radius}px`,
  borderRadius: "100%"
}));
</script>
