<template>
  <NuxtLink :href="project.link">
    <div
      class="text-left w-full project-card bg-dark-800 mt-5 shrink p-5 flex flex-col rounded-lg"
    >
      <div class="text-md font-bold text-left">{{ project.title }}</div>
      <div class="mt-2 text-gray-400 text-sm md:text-xs">
        {{ project.description }}
      </div>
      <div class="mt-3">
        <Tag
          :background-color="tagColors[tag]"
          v-for="(tag, j) in project.tags"
          :key="j"
        >
          {{ tag }}
        </Tag>
      </div>
    </div>
  </NuxtLink>
</template>

<script lang="ts" setup>
import { PropType } from "vue";
import { ProjectItem } from "~/models";
import { tagColors } from "~/utils/helpers";

defineProps({
  project: {
    type: Object as PropType<ProjectItem>,
    required: true
  }
});
</script>
