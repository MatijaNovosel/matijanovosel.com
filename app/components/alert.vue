<template>
  <div class="rounded-lg text-left flex items-center">
    <div>
      <div
        class="text-xl font-bold"
        :style="{
          color: textColor || '#000'
        }"
      >
        {{ title }}
      </div>
      <div class="text-xl mt-1">
        {{ subtitle || "" }}
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
