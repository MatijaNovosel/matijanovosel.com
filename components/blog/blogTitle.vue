<template>
  <div
    class="flex flex-col title-box bg-dark-400 md:px-5 py-3 rounded-tr-none md:rounded-tr-lg w-full md:w-auto"
  >
    <div class="font-bold md:text-3xl">
      {{ title }}
    </div>
    <div class="text-gray-300 mt-2 text-xs">
      Published on
      <span class="text-orange-300">
        {{ createdAt }}
      </span>
    </div>
    <div class="text-xs mt-4 md:mt-3">
      <span
        v-for="(tag, j) in tags"
        :key="j"
        class="mr-1 px-3 py-1 bg-dark-300 rounded-md"
      >
        {{ tag }}
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from "vue";

defineProps({
  title: {
    type: String
  },
  createdAt: {
    type: String
  },
  tags: {
    type: Array as PropType<string[]>
  }
});
</script>

<style scoped>
.title-box {
  background-color: rgba(0, 0, 0, 0.505);
  bottom: 0px;
}

@media only screen and (max-width: 600px) {
  .title-box {
    background-color: transparent;
  }
}
</style>
