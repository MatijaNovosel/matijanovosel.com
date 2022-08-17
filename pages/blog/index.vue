<template>
  <div class="contents">
    <div class="text-4xl mt-6 font-bold mb-5 text-center md:text-left">
      Blogs
    </div>
    <div class="flex px-1 md:px-0">
      <div class="flex flex-1 pr-3">
        <div
          class="bg-dark-800 icon flex items-center justify-center rounded-l-lg px-3"
        >
          <IconSearch class="text-lg text-gray-700" />
        </div>
        <input
          :disabled="loading || error"
          placeholder="Search blog entries"
          class="bg-dark-800 w-full pl-3 md:pl-0"
          v-model="searchText"
        />
        <div
          class="bg-dark-800 icon flex items-center justify-center rounded-r-lg px-3"
        >
          <IconClear
            @click="clearSearch"
            class="text-xl ripple cursor-pointer rounded-full"
          />
        </div>
      </div>
      <div
        class="tag-search-btn flex-shrink bg-dark-600 ripple flex justify-center items-center rounded-lg cursor-pointer"
      >
        <IconTag />
      </div>
    </div>
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
    <div class="grid grid-cols-12 px-1 md:px-0 mt-6" v-else>
      <div class="contents md:space-x-6" v-if="blogs.length > 0">
        <BlogCard
          class="col-span-12 md:col-span-6"
          v-for="(blog, i) in blogs"
          :blog="blog"
          :key="i"
          :class="{
            'mt-6 md:mt-0': i !== 0
          }"
        />
      </div>
      <div class="col-span-12" v-else>
        <span class="text-xl">No blog entries found.</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { BlogListItem } from "@/models";
import IconSearch from "~icons/material-symbols/search";
import IconClear from "~icons/ic/round-clear";
import IconTag from "~icons/mdi/tag-multiple";

const loading = ref(true);
const error = ref(false);
const searchText = ref<string | null>(null);
const allBlogs = ref<BlogListItem[]>([]);

const blogs = computed(() =>
  allBlogs.value.filter((blog) =>
    blog.title
      .toLowerCase()
      .includes(searchText.value ? searchText.value.toLowerCase() : "")
  )
);

const clearSearch = () => {
  searchText.value = null;
};

onMounted(async () => {
  try {
    allBlogs.value = await $fetch("/api/blog");
  } catch {
    error.value = true;
  } finally {
    loading.value = false;
  }
});

const { setMeta } = useMetadata();
setMeta("Matija Novosel - Blog");
</script>

<style scoped>
input {
  height: 50px;
  -webkit-tap-highlight-color: transparent;
  line-height: 48px;
  appearance: none;
  resize: none;
  box-sizing: border-box;
  font-size: 18px;
  color: rgb(193, 194, 197);
  text-align: left;
  min-height: 50px;
  outline: none;
}

.icon {
  height: 50px;
  width: 50px;
}

.tag-search-btn {
  height: 50px;
  width: 50px;
}
</style>
