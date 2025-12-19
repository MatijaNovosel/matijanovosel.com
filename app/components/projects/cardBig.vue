<template>
  <nuxt-link
    :href="project.link"
    class="project_card flex w-full rounded-md ripple border-1 flex-col lg:flex-row bg-white"
  >
    <div
      class="w-full lg:w-1/2 lg:h-full lg:order-last lg:border-l-1 flex flex-center lg:p-5 rounded-l-md md:rounded-l-none rounded-r-md"
      :style="{
        backgroundColor: project.bgColor
      }"
    >
      <img :src="project.imageUrl" alt="" class="project_card_image" />
    </div>
    <div
      class="text-left w-full lg:w-1/2 px-4 pb-2 lg:p-5 flex flex-col justify-start"
    >
      <div class="mt-5 flex flex-wrap gap-2">
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
  height: 210px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  background-size: cover;
  box-shadow: none;
}

@media (min-width: 1024px) {
  .project_card_image {
    background-size: contain;
    border-radius: 8px;
    height: 270px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  }

  .project_card {
    height: 300px;
  }
}
</style>
