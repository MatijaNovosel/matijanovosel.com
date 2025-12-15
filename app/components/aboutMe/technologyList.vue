<template>
  <div>
    <div class="text-lg font-bold pl-2 pb-2 border-b-2">Technologies</div>
    <div class="flex flex-wrap py-3">
      <div
        :style="{ fontSize: '25px', color: color || 'transparent' }"
        v-for="({ color, icon, tooltip, filler }, i) in TECHNOLOGIES"
        :key="i"
        :is="icon"
        class="m-1 icon text-sm"
        v-tooltip="
          filler
            ? null
            : {
                content: tooltip,
                theme: 'info-tooltip'
              }
        "
      >
        <div class="text-md">
          <component :is="icon" />
        </div>
      </div>
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
