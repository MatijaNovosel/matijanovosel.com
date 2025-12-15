<template>
  <nuxt-link :href="project.link">
    <div
      class="text-left w-full px-5 pt-4 flex flex-col h-full justify-center rounded-md ripple border-1"
    >
      <div class="text-md font-bold text-left">
        {{ project.title }}
      </div>
      <div class="text-sm mb-4 ml-1 mt-3">
        {{ project.description }}
      </div>
    </div>
  </nuxt-link>
</template>

<script lang="ts" setup>
import type { ProjectItem } from "~/models";

defineProps<{
  project: ProjectItem;
}>();
</script>
