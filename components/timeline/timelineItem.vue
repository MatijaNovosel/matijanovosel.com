<template>
  <div class="relative">
    <div class="timeline-time text-xs font-bold tracking-wider text-gray-400">
      <span>
        {{ time }}
      </span>
    </div>
    <div class="timeline-dot text-green-vue" />
    <div class="timeline-content pb-5">
      <h6 class="mb-4 mt-0">
        <slot name="title" />
      </h6>
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import "./timeline.css";

defineProps({
  time: {
    type: String,
    required: true,
    default: ""
  }
});
</script>
