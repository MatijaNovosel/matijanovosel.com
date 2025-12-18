<template>
  <nuxt-link
    :href="project.link"
    class="project_card flex w-full rounded-md ripple border-1 flex-col lg:flex-row"
  >
    <div
      class="w-full lg:w-1/2 lg:h-full lg:order-last border-t-1 lg:border-t-0 lg:border-l-1"
    >
      <div class="w-full h-full lg:p-4">
        <div
          class="project_card_image"
          :style="{
            backgroundImage: `url(${project.imageUrl})`
          }"
        ></div>
      </div>
    </div>
    <div
      class="text-left w-full lg:w-1/2 px-4 pb-2 lg:p-5 flex flex-col justify-start"
    >
      <div class="mt-5 flex flex-wrap gap-x-2">
        <tag
          :selected="true"
          :background-color="tagEnum[tag]"
          v-for="(tag, j) in project.tags"
          :key="j"
        >
          {{ tag }}
        </tag>
      </div>

      <div class="text-2xl font-bold mt-2">
        {{ project.title }}
      </div>

      <div class="text-md text-gray-500 mb-4 ml-1 mt-3">
        {{ project.description }}
      </div>
    </div>
  </nuxt-link>
</template>

<script lang="ts" setup>
import type { ProjectItem } from "~/models";
import { TAGS as tagEnum } from "~/utils/constants";

defineProps<{
  project: ProjectItem;
}>();
</script>

<style lang="css" scoped>
.project_card {
  height: 100%;
}

.project_card_image {
  height: 200px;
  border-radius: 0;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

@media (min-width: 1024px) {
  .project_card_image {
    height: 100%;
    background-size: contain;
    border-radius: 8px;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
  }

  .project_card {
    height: 300px;
  }
}
</style>
