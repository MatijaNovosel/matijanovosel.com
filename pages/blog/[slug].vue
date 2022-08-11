<template>
  <div class="mt-4 md:mt-10 w-full px-3 md:px-0">
    <NuxtLink to="/blog">
      <button
        class="ripple project-btn pr-3 pl-2 py-1 font-medium text-xl text-gray-100 rounded flex items-center justify-center"
      >
        <IconArrowLeft class="mr-2" />
        <h6>Back</h6>
      </button>
    </NuxtLink>
    <h1
      class="font-bold text-5xl md:text-7xl text-center font-space"
      v-if="loading"
    >
      <Spinner />
    </h1>
    <alert
      title="Something went wrong"
      subtitle="An error ocurred while loading the blog entry"
      class="mt-5"
      v-else-if="error"
    />
    <template v-else>
      <div
        class="blog-img rounded-b-lg md:rounded-b-none rounded-t-lg mt-5 relative"
        :style="{
          backgroundImage: `url(${blog.img})`
        }"
      >
        <BlogTitle
          class="absolute hidden md:block"
          :title="blog.title"
          :created-at="blog.createdAt"
          :tags="blog.tags"
        />
      </div>
      <BlogTitle
        class="my-3 md:hidden"
        :title="blog.title"
        :created-at="blog.createdAt"
        :tags="blog.tags"
      />
      <div
        class="bg-dark-800 rounded-b-lg rounded-t-lg md:rounded-t-none p-5 blog-content"
      >
        <MarkdownRenderer :source="blog.html" />
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
import IconArrowLeft from "~icons/mdi/arrow-left";
import { BlogListItem } from "~/models";
const { setMeta } = useMetadata();

const route = useRoute();
const loading = ref(true);
const error = ref(false);
const blog = ref<BlogListItem>();

setMeta("Matija Novosel - Blogs");

onMounted(async () => {
  try {
    blog.value = await $fetch<BlogListItem>(`/api/blog/${route.params.slug}`);
    setMeta(`Matija Novosel - ${blog.value.title}`);
  } catch {
    error.value = true;
  } finally {
    loading.value = false;
  }
});
</script>

<style scoped>
.blog-img {
  background-size: cover;
  background-position: center center;
  height: 400px;
}

:deep(.blog-content) h6:not(:first-child) {
  padding-top: 15px;
}

:deep(.blog-content) h6 {
  font-size: 20px;
  padding-bottom: 5px;
}

@media only screen and (max-width: 600px) {
  .blog-img {
    height: 200px;
  }
}
</style>
