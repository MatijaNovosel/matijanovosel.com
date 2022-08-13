<template>
  <NuxtLink :to="`/blog/${blog.id}`" class="shrink">
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
      <div>
        <Tag
          :background-color="tagColors[tag]"
          v-for="(tag, j) in blog.tags"
          :key="j"
        >
          {{ tag }}
        </Tag>
      </div>
    </div>
  </NuxtLink>
</template>

<script lang="ts" setup>
import { PropType } from "vue";
import { BlogListItem } from "~/models";
import { tagColors } from "~/utils/helpers";

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
  height: 220px;
}

@media only screen and (max-width: 600px) {
  .blog-img {
    border-radius: 14px;
    height: 170px;
  }
}
</style>
