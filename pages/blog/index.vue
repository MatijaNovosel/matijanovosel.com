<template>
  <div class="contents">
    <div class="text-4xl mt-6 font-bold mb-5 text-center md:text-left">
      Blogs
    </div>
    <div class="flex px-1 md:px-0">
      <div
        class="bg-dark-800 icon flex items-center justify-center rounded-l-lg"
      >
        <IconSearch class="text-lg" />
      </div>
      <input
        placeholder="Search blog entries"
        class="w-full bg-dark-800"
        @input="searchEntries"
        v-model="searchText"
      />
      <div
        class="bg-dark-800 icon flex items-center justify-center rounded-r-lg"
      >
        <IconClear
          @click="clearSearch"
          class="rounded-full clear-icon ripple text-xl"
        />
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

const loading = ref(true);
const error = ref(false);
const searchText = ref<string | null>(null);
const allBlogs = ref<BlogListItem[]>([]);
const blogs = ref<BlogListItem[]>([]);

const clearSearch = () => {
  searchText.value = null;
  searchEntries();
};

const searchEntries = () => {
  blogs.value = allBlogs.value.filter((blog) =>
    blog.title
      .toLowerCase()
      .includes(searchText.value ? searchText.value.toLowerCase() : "")
  );
};

onMounted(async () => {
  try {
    allBlogs.value = await $fetch("/api/blog");
    blogs.value = await $fetch("/api/blog");
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
.clear-icon:hover {
  cursor: pointer;
}

input {
  height: 50px;
  -webkit-tap-highlight-color: transparent;
  line-height: 48px;
  appearance: none;
  resize: none;
  box-sizing: border-box;
  font-size: 18px;
  color: rgb(193, 194, 197);
  display: block;
  text-align: left;
  min-height: 50px;
  transition: border-color 100ms ease 0s;
  border: 0px;
  outline: none;
}

.icon {
  height: 50px;
  width: 50px;
}
</style>
