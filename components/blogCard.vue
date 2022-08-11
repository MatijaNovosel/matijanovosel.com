<template>
  <NuxtLink :to="`/blog/${blog.id}`">
    <div
      class="blog-img mb-5 w-full"
      :style="{
        backgroundImage: `url(${blog.img})`
      }"
    />
    <div class="flex flex-col justify-center">
      <span class="mb-1 text-sm text-green-vue"> {{ blog.createdAt }} </span>
      <span class="text-xl font-bold text-left"> {{ blog.title }} </span>
      <span class="mb-4 mt-3 text-gray-400 text-sm">
        {{ blog.subtitle }}
      </span>
      <div class="text-sm">
        <span v-for="(tag, j) in blog.tags" :key="j" class="text-gray-600 mr-1">
          #{{ tag }}
        </span>
      </div>
    </div>
  </NuxtLink>
</template>

<script lang="ts" setup>
import { PropType } from "vue";
import { BlogListItem } from "~/models";

defineProps({
  blog: {
    type: Object as PropType<BlogListItem>,
    required: true
  }
});
</script>

<style scoped>
.blog-img {
  border-radius: 16px;
  background-size: cover;
  background-position: center center;
  height: 250px;
}

@media only screen and (max-width: 600px) {
  .blog-img {
    border-radius: 14px;
    height: 200px;
  }
}
</style>
