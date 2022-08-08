<template>
  <div class="contents">
    <div class="text-4xl font-bold mb-8 mt-10 text-center">Blog</div>
    <div class="grid grid-cols-12 md:space-x-6 px-6 md:px-0">
      <BlogCard
        class="col-span-12 md:col-span-6 shrink cursor-pointer"
        v-for="(blog, i) in blogs"
        :blog="blog"
        :key="i"
        :class="{
          'mt-6 md:mt-0': i !== 0
        }"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { BlogListItem } from "@/models";

const blogs: BlogListItem[] = [
  {
    title: "<script setup> vs defineComponent",
    blogId: 1,
    img: "/vue.jpg",
    subtitle:
      "Is the setup directive more intuitive than the defineComponent function?",
    tags: ["vue3", "vue", "javascript"],
    createdAt: new Date(1659171113919),
    id: 1
  },
  {
    title: "Vue 2 vs Vue 3",
    blogId: 2,
    img: "/vue.jpg",
    subtitle:
      "After having created a great divide in the Vue community, how does Vue 3 stand up to its earlier version?",
    tags: ["vue3", "vue2", "vue", "javascript"],
    createdAt: new Date(1659084740258),
    id: 2
  }
];

const loading = ref(true);
const error = ref(false);

onMounted(async () => {
  const { data, pending, error } = await useFetch(`/api/blog`);
  loading.value = false;
});

const { setMeta } = useMetadata();
setMeta("Matija Novosel - Blog");
</script>
