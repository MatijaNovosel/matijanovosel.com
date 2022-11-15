<template>
  <div class="offset">
    <div class="title">Projects</div>
    <div class="row gap-4">
      <div
        v-for="(project, i) in PROJECTS"
        :key="i"
        class="col-span-12 md:col-span-6"
      >
        <ProjectCard :project="project" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PROJECTS } from "~/utils/constants";

const { setMeta } = useMetadata();
setMeta("Projects | Matija Novosel");
</script>
