<template>
  <nuxt-link :href="project.link">
    <div
      class="text-left w-full shrink px-5 pt-4 flex flex-col h-full justify-center border-2 rounded-md uppercase"
    >
      <div class="text-md font-bold text-left text-2xl">
        {{ project.title }}
      </div>
      <div class="text-xl mb-3 ml-1 mt-2">
        {{ project.description }}
      </div>
    </div>
  </nuxt-link>
</template>

<script lang="ts" setup>
import { PropType } from "vue";
import { ProjectItem } from "~/models";

defineProps({
  project: Object as PropType<ProjectItem>
});
</script>
