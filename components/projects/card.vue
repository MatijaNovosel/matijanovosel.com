<template>
  <nuxt-link :href="project.link">
    <div
      class="text-left w-full shrink px-5 py-3 flex flex-col rounded-lg h-full justify-center border-2"
    >
      <div class="text-md font-bold text-left text-2xl">
        {{ project.title }}
      </div>
      <div class="text-gray-400 text-xl my-3">
        {{ project.description }}
      </div>
      <div class="flex flex-wrap">
        <tag
          :background-color="TAGS[tag]"
          v-for="tag in project.tags"
          :key="tag"
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
