<template>
  <div class="contents">
    <div class="text-4xl font-bold mb-8 mt-10 text-center">Blog</div>
    <h1
      class="font-bold text-5xl md:text-7xl text-center font-space"
      v-if="loading"
    >
      <Spinner />
    </h1>
    <alert
      title="Something went wrong"
      subtitle="An error ocurred while loading blog entries."
      class="mt-5"
      v-else-if="error"
    />
    <div class="grid grid-cols-12 md:space-x-6 px-6 md:px-0" v-else>
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

const loading = ref(true);
const error = ref(false);
const blogs = ref<BlogListItem[]>([]);

onMounted(async () => {
  try {
    const { data } = await $fetch("/api/blog");

    blogs.value = data.map<BlogListItem>((blog) => ({
      createdAt: new Date(blog.created_at),
      title: blog.title,
      id: blog.id,
      img: blog.image_url,
      subtitle: blog.subtitle,
      tags: blog.tags.split(",")
    }));
  } catch {
    error.value = true;
  } finally {
    loading.value = false;
  }
});

const { setMeta } = useMetadata();
setMeta("Matija Novosel - Blog");
</script>
