<template>
  <div
    class="flex flex-col title-box pb-3 rounded-tr-none md:rounded-tr-lg w-full"
  >
    <div class="font-bold text-xl md:text-3xl">
      {{ title }}
    </div>
    <div class="text-gray-300 mt-2 text-lg">
      Published on
      <span class="timestamp">
        {{ createdAt }}
      </span>
    </div>
    <div class="mt-4 md:mt-3 flex flex-wrap gap-x-3">
      <tag
        class="text-sm"
        :selected="true"
        :background-color="tagEnum[tag]"
        v-for="(tag, j) in tags"
        :key="j"
      >
        {{ tag }}
      </tag>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { TAGS as tagEnum } from "~/utils/constants";

defineProps<{
  title: string;
  createdAt: string;
  tags: string[];
}>();
</script>

<style scoped>
.title-box {
  bottom: 0px;
  font-family: "Roboto";
}

.timestamp {
  color: #42b883;
}

@media only screen and (max-width: 600px) {
  .title-box {
    background-color: transparent;
  }
}
</style>
