<template>
  <div class="rounded-lg p-5 text-left flex items-center bg-dark-400">
    <div class="mr-5 text-3xl">
      {{ leading || "🛑" }}
    </div>
    <div>
      <div
        class="text-lg"
        :style="{
          color: textColor || '#ffffff'
        }"
      >
        {{ title }}
      </div>
      <div class="text-sm mt-1" v-if="subtitle">
        {{ subtitle }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  title: string;
  textColor?: string;
  leading?: string;
  subtitle?: string;
}>();
</script>
