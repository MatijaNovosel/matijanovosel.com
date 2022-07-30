<template>
  <q-page class="q-pt-none q-pb-lg q-pt-md-lg text-center">
    <div class="text-h4 text-bold q-my-md">Blog</div>
    <div class="row">
      <div
        class="col-12 col-md-6 q-pa-none q-pa-md-md text-left q-mb-lg q-mb-md-none"
        v-for="(blog, i) in blogs"
        :key="i"
      >
        <div
          class="blog-img q-mb-md"
          :style="{
            backgroundImage: `url(${blog.img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            height: `${smAndDown() ? 200 : 250}px`
          }"
        />
        <div class="column justify-center">
          <span class="text-grey-7">
            {{ formatMonth(blog.createdAt) }}
          </span>
          <span class="text-h5 text-bold text-left"> {{ blog.title }} </span>
          <span class="text-body1 q-mb-md q-mt-sm text-grey-5">
            {{ blog.subtitle }}
          </span>
          <div>
            <span v-for="(tag, j) in blog.tags" :key="j" class="text-grey-7 q-mr-sm"> #{{ tag }} </span>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts" setup>
import { BlogItem } from "src/models/general";
import { smAndDown, formatMonth } from "src/utils/helpers";

const blogs: BlogItem[] = [
  {
    title: "<script setup> vs defineComponent",
    blogId: 1,
    img: "/vue.jpg",
    subtitle: "Is the setup directive more intuitive than the defineComponent function?",
    tags: ["vue3", "vue", "javascript"],
    createdAt: new Date(1659171113919)
  },
  {
    title: "Vue 2 vs Vue 3",
    blogId: 2,
    img: "/vue.jpg",
    subtitle:
      "After having created a great divide in the Vue community, how does Vue 3 stand up to its earlier version?",
    tags: ["vue3", "vue2", "vue", "javascript"],
    createdAt: new Date(1659084740258)
  }
];
</script>

<style scoped>
.blog-img {
  border-radius: 16px;
  width: 100%;
}
</style>
