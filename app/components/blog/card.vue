<template>
  <nuxt-link :to="`/blog/${blog.id}`" class="shrink">
    <div
      class="blog-img mb-5 w-full"
      :style="{
        backgroundImage: `url(${blog.img})`
      }"
    />
    <div class="flex flex-col justify-center">
      <span class="text-sm text-gray-500"> {{ blog.createdAt }} </span>
      <span class="text-md font-bold text-left"> {{ blog.title }} </span>
      <span class="text-gray-400 text-sm pt-1">
        {{ blog.subtitle }}
      </span>
    </div>
    <div class="flex flex-wrap gap-x-2 mt-3">
      <tag
        :selected="true"
        :background-color="TAGS[tag]"
        v-for="(tag, j) in blog.tags"
        :key="j"
      >
        {{ tag }}
      </tag>
    </div>
  </nuxt-link>
</template>

<script lang="ts" setup>
import type { BlogListItem } from "~/models";
import { TAGS } from "~/utils/constants";

defineProps<{
  blog: BlogListItem;
}>();
</script>

<style scoped>
.blog-img {
  border-radius: 16px;
  background-size: cover;
  background-position: center center;
  height: 220px;
}

@media only screen and (max-width: 600px) {
  .blog-img {
    border-radius: 14px;
    height: 140px;
  }
}
</style>
