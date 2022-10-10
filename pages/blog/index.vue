<template>
  <div class="contents">
    <transition name="modal">
      <modal title="Filter by tags" v-if="modalOpen" @close="modalOpen = false">
        <div class="flex flex-wrap">
          <Tag
            :background-color="tags[tag]"
            v-for="(tag, i) in modalTags"
            :key="i"
            class="cursor-pointer no-highlight ripple"
            @clicked="selectTag(tag)"
            :selected="selectedTags.includes(tag)"
          >
            {{ tag }}
          </Tag>
        </div>
      </modal>
    </transition>
    <div class="text-4xl mt-6 font-bold mb-5 text-center md:text-left">
      Blog
    </div>
    <div class="flex">
      <BlogSearchInput
        class="flex-grow pr-3"
        :loading="pending"
        :error="!!error"
        v-model="searchText"
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
      v-if="pending"
    >
      <Spinner />
    </h1>
    <alert
      text-color="#d91139"
      title="Something went wrong"
      subtitle="An error ocurred while loading blog entries."
      class="mt-5"
      v-else-if="error"
    />
    <div class="grid grid-cols-12 px-1 md:px-0 mt-6 md:gap-8" v-else>
      <div class="contents" v-if="paginatedBlogs.length > 0">
        <BlogCard
          class="col-span-12 md:col-span-6"
          v-for="(blog, i) in paginatedBlogs"
          :blog="blog"
          :key="i"
          :class="{
            'mt-6 md:mt-0': i !== 0
          }"
        />
        <div class="col-span-12 flex justify-center items-center">
          <pagination
            class="my-5"
            v-model="page"
            :number-of-pages="numberOfPages"
          />
        </div>
      </div>
      <div class="col-span-12 text-xl text-center md:text-left" v-else>
        <alert leading="😥" title="No blog entries found." />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { tags } from "~/utils/helpers";
import IconTag from "~icons/mdi/tag-multiple";

const {
  data: allBlogs,
  pending,
  error
} = useLazyFetch("/api/blog", {
  key: "/api/blog"
});

const modalOpen = ref(false);
const selectedTags = ref<string[]>([]);
const searchText = ref<string>("");
const page = ref(1);

const ITEMS_PER_PAGE = 4;

const numberOfPages = computed(() =>
  Math.ceil(filteredBlogs.value.length / ITEMS_PER_PAGE)
);

const modalTags = computed(() => {
  return [...new Set(allBlogs.value.flatMap((blog) => blog.tags))];
});

const filteredBlogs = computed(() =>
  allBlogs.value.filter(
    (b) =>
      b.title.toLowerCase().includes(searchText.value.toLowerCase()) &&
      b.tags.some((t) =>
        selectedTags.value.length > 0 ? selectedTags.value.includes(t) : true
      )
  )
);

const paginatedBlogs = computed(() => {
  const start = (page.value - 1) * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;
  return filteredBlogs.value.slice(start, end);
});

const selectTag = (tag: string) => {
  if (selectedTags.value.includes(tag)) {
    selectedTags.value = selectedTags.value.filter((t) => t !== tag);
    return;
  }
  selectedTags.value.push(tag);
};

const handleKeyPress = (e: KeyboardEvent) => {
  if (e.key === "Escape") {
    modalOpen.value = false;
  }
};

onMounted(() => {
  window.addEventListener("keydown", handleKeyPress);
});

onBeforeUnmount(() => {
  window.removeEventListener("keydown", handleKeyPress);
});

watch([searchText, selectedTags], () => {
  page.value = 1;
});

const { setMeta } = useMetadata();
setMeta("Blog | Matija Novosel");
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

@media only screen and (max-width: 600px) {
  .blog-img {
    height: 200px;
  }
}
</style>
