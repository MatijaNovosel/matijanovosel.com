<template>
  <NuxtLink :href="project.link">
    <div
      class="text-left w-full grid grid-cols-12 project-card bg-dark-800 mt-5 shrink"
    >
      <div
        class="project-img col-span-12 md:col-span-7 rounded-tr-lg rounded-tl-lg md:rounded-tr-none md:rounded-bl-lg"
        :style="{
          backgroundImage: `url(${project.img})`
        }"
      />
      <div
        class="col-span-12 md:col-span-5 px-4 flex flex-col justify-center my-5 md:my-0"
      >
        <span class="text-md font-bold text-left"> {{ project.title }} </span>
        <span class="mt-2 text-gray-400 text-sm md:text-xs">
          {{ project.description }}
        </span>
      </div>
    </div>
  </NuxtLink>
</template>

<script lang="ts" setup>
import { PropType } from "vue";
import { ProjectItem } from "@/models";

defineProps({
  project: {
    type: Object as PropType<ProjectItem>,
    required: true
  }
});
</script>

<style scoped>
.project-img {
  background-size: cover;
  background-position: center center;
  height: 180px;
}

@media only screen and (max-width: 600px) {
  .project-img {
    height: 150px;
  }
}

.project-card {
  border-radius: 16px;
}
</style>
