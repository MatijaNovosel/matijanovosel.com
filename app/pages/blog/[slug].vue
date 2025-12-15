<template>
  <div class="w-full px-3 md:px-0">
    <app-spinner class="mx-auto" v-if="pending" />
    <alert
      text-color="#d91139"
      title="Something went wrong"
      subtitle="An error ocurred while loading the blog entry"
      class="mt-5"
      v-else-if="error"
    />
    <template v-else>
      <div class="rounded-b-lg blog-content">
        <blog-title
          class="mb-3"
          :title="blog!.title"
          :created-at="blog!.createdAt"
          :tags="blog!.tags"
        />
        <markdown-renderer :source="blog!.html!" />
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
import type { BlogListItem } from "~/models";
const { setMeta } = useMetadata();

const route = useRoute();
setMeta("Blog | Matija Novosel");

const {
  data: blog,
  pending,
  error
} = await useLazyFetch<BlogListItem>(`/api/blog/${route.params.slug}`, {
  key: `api/blog/${route.params.slug}`
});

watch(
  blog,
  (val) => {
    if (val) setMeta(val.title, val.subtitle, val.img);
    else setMeta("Loading ...");
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

.bottom-right {
  position: absolute;
  right: 0px;
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
