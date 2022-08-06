<template>
  <NuxtLink>
    <div
      class="blog-img mb-5"
      :style="{
        backgroundImage: `url(${blog.img})`
      }"
    />
    <div class="flex flex-col justify-center">
      <span class="text-gray-500">
        {{ formatMonth(blog.createdAt) }}
      </span>
      <span class="text-xl font-bold text-left"> {{ blog.title }} </span>
      <span class="mb-4 mt-3 text-gray-400">
        {{ blog.subtitle }}
      </span>
      <div>
        <span v-for="(tag, j) in blog.tags" :key="j" class="text-gray-600 mr-3">
          #{{ tag }}
        </span>
      </div>
    </div>
  </NuxtLink>
</template>

<script lang="ts" setup>
import { PropType } from "vue";
import { BlogListItem } from "~/models";
import { formatMonth } from "~/utils/helpers";

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
  width: 100%;
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
