<template>
  <div class="timeline-entry">
    <div class="timeline-time">
      <span>
        {{ time }}
      </span>
    </div>
    <div class="timeline-dot text-green-vue" />
    <div class="timeline-content">
      <h6 class="timeline-title">
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
