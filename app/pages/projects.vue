<template>
  <div class="offset">
    <div class="title">Projects</div>
    <projects-grid :projects="PROJECTS" />
    <div class="title">Components</div>
    <projects-grid :projects="COMPONENTS" />
    <div class="title">Other</div>
    <projects-grid :projects="OTHER_PROJECTS" />
  </div>
</template>

<script lang="ts" setup>
import { COMPONENTS, OTHER_PROJECTS, PROJECTS } from "~/utils/constants";
const { setMeta } = useMetadata();
setMeta("Projects | Matija Novosel");
</script>
