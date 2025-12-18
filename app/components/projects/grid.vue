<template>
  <div class="row gap-4">
    <div
      v-for="(project, i) in projectsWithImages"
      :key="i"
      class="col-span-12"
    >
      <projects-card-big :project="project" />
    </div>
    <div
      v-for="(project, i) in otherProjects"
      :key="i"
      class="col-span-12 md:col-span-6"
    >
      <projects-card :project="project" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ProjectItem } from "~/models";

const props = defineProps<{
  projects: ProjectItem[];
}>();

const projectsWithImages = computed(() => {
  return props.projects.filter((x) => !!x.imageUrl);
});

const otherProjects = computed(() => {
  return props.projects.filter((x) => !x.imageUrl);
});
</script>
