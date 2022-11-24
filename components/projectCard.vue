<template>
  <nuxt-link :href="project.link">
    <div
      class="text-left w-full bg-dark-800 shrink p-5 flex flex-col rounded-lg h-full justify-center"
    >
      <div class="text-md font-bold text-left">
        {{ project.title }}
      </div>
      <div class="mt-2 text-gray-400 text-sm md:text-xs">
        {{ project.description }}
      </div>
      <div class="mt-3 flex flex-wrap">
        <tag
          :background-color="TAGS[tag]"
          v-for="(tag, j) in project.tags"
          :key="j"
        >
          {{ tag }}
        </tag>
      </div>
    </div>
  </nuxt-link>
</template>

<script lang="ts" setup>
import { PropType } from "vue";
import { ProjectItem } from "~/models";
import { TAGS } from "~/utils/constants";

defineProps({
  project: Object as PropType<ProjectItem>
});
</script>
