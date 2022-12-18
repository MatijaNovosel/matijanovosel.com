<template>
  <div class="row gap-4">
    <div
      v-for="(project, i) in projects"
      :key="i"
      class="col-span-12 md:col-span-6"
    >
      <projects-card :project="project" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from "vue";
import { ProjectItem } from "~/models";

defineProps({
  projects: Array as PropType<ProjectItem[]>
});
</script>
