<template>
  <div class="contents">
    <transition name="modal">
      <modal title="Filter by tags" v-if="modalOpen" @close="modalOpen = false">
        <div class="flex flex-wrap">
          <Tag
            :background-color="tag.color"
            v-for="(tag, i) in modalTags"
            :key="i"
            class="cursor-pointer tag ripple"
            @clicked="selectTag(tag.name)"
            :selected="selectedTags.includes(tag.name)"
          >
            {{ tag.name }}
          </Tag>
        </div>
      </modal>
    </transition>
    <div class="text-4xl mt-6 font-bold mb-5 text-center md:text-left">
      Blogs
    </div>
    <div class="flex px-1 md:px-0">
      <BlogSearchInput
        class="flex-grow pr-3"
        :loading="loading"
        :error="error"
        v-model:text="searchText"
      />
      <div
        @click="modalOpen = true"
        class="tag-search-btn bg-dark-600 ripple flex justify-center items-center rounded-lg cursor-pointer relative"
        :class="{
          badge: selectedTags.length > 0
        }"
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
import { BlogListItem } from "~/models";
import { tags } from "~/utils/helpers";
import IconTag from "~icons/mdi/tag-multiple";

const loading = ref(true);
const error = ref(false);
const modalOpen = ref(false);
const selectedTags = ref<string[]>([]);
const searchText = ref<string | null>(null);

const modalTags = Object.entries(tags)
  .map((entry) => {
    const [name, color] = entry;
    return {
      name,
      color
    };
  })
  .sort((a, b) => a.name.length - b.name.length);

let allBlogs: BlogListItem[] = [];

const blogs = computed(() => {
  const predicate = [
    (blog: BlogListItem) =>
      blog.title
        .toLowerCase()
        .includes(searchText.value ? searchText.value.toLowerCase() : "")
  ];

  if (selectedTags.value.length > 0) {
    predicate.push((blog: BlogListItem) =>
      blog.tags.some((t) => selectedTags.value.includes(t))
    );
  }

  return allBlogs.filter((b) => {
    let match = true;

    predicate.forEach((p) => {
      match = match && p(b);
    });

    return match;
  });
});

const selectTag = (tag: string) => {
  if (selectedTags.value.includes(tag)) {
    selectedTags.value = selectedTags.value.filter((t) => t !== tag);
    return;
  }
  selectedTags.value.push(tag);
};

onMounted(async () => {
  try {
    allBlogs = await $fetch("/api/blog");
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
.tag-search-btn {
  height: 50px;
  width: 50px;
}

.badge::after {
  content: "";
  border-radius: 100%;
  border: 7px solid var(--vue-green);
  top: -3px;
  right: -3px;
  position: absolute;
}

.tag {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

@media only screen and (max-width: 600px) {
  .blog-img {
    height: 200px;
  }
}
</style>
