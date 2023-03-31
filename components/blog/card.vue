<template>
  <nuxt-link :to="`/blog/${blog.id}`" class="shrink">
    <div
      class="blog-img mb-5 w-full"
      :style="{
        backgroundImage: `url(${blog.img})`
      }"
    />
    <div class="flex flex-col justify-center">
      <span class="mb-1 text-xl text-green-vue"> {{ blog.createdAt }} </span>
      <span class="text-3xl font-bold text-left"> {{ blog.title }} </span>
      <span class="mb-4 mt-3 text-gray-400 text-2xl">
        {{ blog.subtitle }}
      </span>
    </div>
  </nuxt-link>
</template>

<script lang="ts" setup>
import { BlogListItem } from "~/models";

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
    height: 170px;
  }
}
</style>
