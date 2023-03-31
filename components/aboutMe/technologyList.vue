<template>
  <div class="bg-dark-800 rounded-lg mt-5">
    <div class="font-bold text-3xl p-3 rounded-t-lg border-b-2">
      Technologies
    </div>
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
