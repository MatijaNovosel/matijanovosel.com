<template>
  <div class="mt-4 md:mt-10 w-full px-3 md:px-0">
    <BackBtn />
    <h1
      class="font-bold text-5xl md:text-7xl text-center font-space"
      v-if="pending"
    >
      <Spinner />
    </h1>
    <alert
      text-color="#d91139"
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
      />
      <div class="bg-dark-800 rounded-b-lg p-5 blog-content">
        <BlogTitle
          class="my-3"
          :title="blog.title"
          :created-at="blog.createdAt"
          :tags="blog.tags"
        />
        <MarkdownRenderer :source="blog.html" />
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { BlogListItem } from "~/models";
import BackBtn from "~/components/blog/backBtn.vue";
const { setMeta } = useMetadata();

const route = useRoute();
setMeta("Matija Novosel - Blogs");

const {
  data: blog,
  pending,
  error
} = await useLazyFetch<BlogListItem>(`/api/blog/${route.params.slug}`, {
  key: `api/blog/${route.params.slug}`
});

watch(
  pending,
  () => {
    if (blog.value) {
      setMeta(blog.value.title, blog.value.subtitle, blog.value.img);
    } else {
      setMeta("Loading ...");
    }
  },
  { immediate: true }
);
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
