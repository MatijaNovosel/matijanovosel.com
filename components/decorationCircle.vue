<template>
  <div :style="style" />
</template>

<script lang="ts" setup>
const props = defineProps({
  radius: {
    type: Number,
    default: 10
  },
  color: {
    type: String,
    default: "#ffffff"
  }
});

const style = computed(() => ({
  backgroundColor: props.color,
  width: `${props.radius}px`,
  height: `${props.radius}px`,
  borderRadius: "100%"
}));
</script>
