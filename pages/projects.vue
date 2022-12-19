<template>
  <div class="offset">
    <div class="title">Projects</div>
    <projects-grid :projects="PROJECTS" />
    <div class="title">Other</div>
    <projects-grid :projects="OTHER_PROJECTS" />
  </div>
</template>

<script lang="ts" setup>
import { OTHER_PROJECTS, PROJECTS } from "~/utils/constants";

const { setMeta } = useMetadata();
setMeta("Projects | Matija Novosel");
</script>
