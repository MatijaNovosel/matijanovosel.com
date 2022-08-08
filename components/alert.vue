<template>
  <div class="rounded-lg p-5 text-left flex items-center bg-dark-400">
    <div class="mr-5 text-3xl">🛑</div>
    <div>
      <div class="text-lg text-red-400">
        {{ title }}
      </div>
      <div class="text-sm mt-1">
        {{ subtitle }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    required: true,
    default: ""
  },
  subtitle: {
    type: String,
    required: true,
    default: ""
  }
});
</script>
