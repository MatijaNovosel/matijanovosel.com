<template>
  <div class="pt-6 md:pt-8 text-left w-full grid grid-cols-12 px-8 md:px-0">
    <div
      class="project-img col-span-12 md:col-span-7"
      :style="{
        backgroundImage: `url(${project.img})`
      }"
    />
    <div
      class="col-span-12 md:col-span-5 md:pl-10 pt-5 md:pt-0 flex flex-col justify-center"
    >
      <span class="text-xl font-bold text-left"> {{ project.title }} </span>
      <span class="mt-2 mb-5 text-gray-400">
        {{ project.description }}
      </span>
      <a :href="project.link">
        <button
          class="ripple project-btn px-6 py-2 bg-dark-400 font-medium text-xl text-gray-100 rounded flex items-center justify-center"
        >
          <h6>Visit</h6>
          <IconOpenInNew class="ml-3" />
        </button>
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from "vue";
import { ProjectItem } from "@/models";
import IconOpenInNew from "~icons/material-symbols/open-in-new";

defineProps({
  project: {
    type: Object as PropType<ProjectItem>,
    required: true
  }
});
</script>

<style scoped>
.project-img {
  border-radius: 16px;
  background-size: cover;
  background-position: center center;
  height: 300px;
}

.project-btn {
  border-radius: 12px !important;
  width: 150px;
}

@media only screen and (max-width: 600px) {
  .project-img {
    height: 200px;
  }
}
</style>
