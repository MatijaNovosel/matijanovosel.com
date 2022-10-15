<template>
  <div
    class="flex flex-col title-box pb-3 rounded-tr-none md:rounded-tr-lg w-full"
  >
    <div class="font-bold text-2xl md:text-3xl">
      {{ title }}
    </div>
    <div class="text-gray-300 mt-2 text-xs">
      Published on
      <span class="text-green-vue">
        {{ createdAt }}
      </span>
    </div>
    <div class="mt-4 md:mt-3 flex flex-wrap">
      <Tag :background-color="tagEnum[tag]" v-for="(tag, j) in tags" :key="j">
        {{ tag }}
      </Tag>
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
}

@media only screen and (max-width: 600px) {
  .title-box {
    background-color: transparent;
  }
}
</style>
