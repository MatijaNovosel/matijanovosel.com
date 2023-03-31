<template>
  <div>
    <div class="text-3xl pl-2 pb-2 border-b-2">Technologies</div>
    <div class="p-3">
      <component
        :style="{ fontSize: '25px', color: color || 'transparent' }"
        v-for="({ color, icon, tooltip }, i) in TECHNOLOGIES"
        :key="i"
        :is="icon"
        class="m-1 icon text-lg"
        v-tooltip="{
          content: tooltip,
          theme: 'info-tooltip'
        }"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { TECHNOLOGIES } from "~/utils/constants";
</script>

<style scoped>
.icon {
  outline: none;
}
</style>
