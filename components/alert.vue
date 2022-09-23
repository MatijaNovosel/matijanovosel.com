<template>
  <div class="rounded-lg p-5 text-left flex items-center bg-dark-400">
    <div class="mr-5 text-3xl">
      {{ leading }}
    </div>
    <div>
      <div
        class="text-lg"
        :style="{
          color: textColor
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
defineProps({
  title: {
    type: String,
    required: true,
    default: ""
  },
  textColor: {
    type: String,
    required: false,
    default: "#ffffff"
  },
  leading: {
    type: String,
    required: false,
    default: "🛑"
  },
  subtitle: {
    type: String,
    required: false
  }
});
</script>
