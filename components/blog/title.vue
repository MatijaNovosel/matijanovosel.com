<template>
  <div
    class="flex flex-col title-box bg-dark-400 md:px-5 py-3 rounded-tr-none md:rounded-tr-lg w-full md:w-auto"
  >
    <div class="font-bold md:text-3xl">
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
import { PropType } from "vue";
import { tags as tagEnum } from "~/utils/helpers";

defineProps({
  title: {
    type: String,
    default: ""
  },
  createdAt: {
    type: String,
    default: ""
  },
  tags: {
    type: Array as PropType<string[]>,
    default: []
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
