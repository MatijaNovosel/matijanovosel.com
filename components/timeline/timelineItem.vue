<template>
  <div class="relative">
    <div class="timeline-dot" />
    <div class="timeline-content pb-5">
      <slot name="title" />
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import "./timeline.css";
</script>
