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
        class="blog-img rounded-t-lg mt-5 relative"
        :style="{
          backgroundImage: `url(${blog.img})`
        }"
      >
        <div
          class="flex flex-col absolute title-box px-5 py-3 rounded-tr-none md:rounded-tr-lg w-full md:w-auto"
        >
          <span class="font-bold text-xl md:text-3xl">
            {{ blog.title }}
          </span>
          <span class="text-gray-300 mt-2 text-sm">
            Published on
            <span class="text-orange-300">
              {{ blog.createdAt }}
            </span>
          </span>
        </div>
      </div>
      <div class="bg-dark-800 rounded-b-lg p-5 blog-content">
        <MarkdownRenderer :source="blog.html" />
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
import IconArrowLeft from "~icons/mdi/arrow-left";
import { BlogListItem } from "~/models";

const route = useRoute();
const loading = ref(true);
const error = ref(false);
const blog = ref<BlogListItem>();

onMounted(async () => {
  try {
    blog.value = await $fetch<BlogListItem>(`/api/blog/${route.params.slug}`);
  } catch {
    error.value = true;
  } finally {
    loading.value = false;
  }
});

const { setMeta } = useMetadata();
setMeta("Matija Novosel - Blogs");
</script>

<style scoped>
.blog-img {
  background-size: cover;
  background-position: center center;
  height: 400px;
}

.title-box {
  background-color: rgba(0, 0, 0, 0.505);
  bottom: 0px;
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
