<template>
  <div class="contents">
    <transition name="modal">
      <modal title="Filter by tags" v-if="modalOpen" @close="modalOpen = false">
        <div class="flex flex-wrap">
          <Tag
            :background-color="TAGS[tag]"
            v-for="(tag, i) in modalTags"
            :key="i"
            class="cursor-pointer ripple"
            @clicked="selectTag(tag)"
            :selected="selectedTags.has(tag)"
          >
            {{ tag }}
          </Tag>
        </div>
      </modal>
    </transition>
    <div class="title">Blog</div>
    <AppSpinner v-if="pending" />
    <alert
      text-color="#d91139"
      title="Something went wrong"
      subtitle="An error ocurred while loading blog entries."
      class="mt-5"
      v-else-if="error"
    />
    <template v-else>
      <div class="flex">
        <BlogSearchInput
          class="flex-grow pr-3"
          :loading="pending"
          :error="!!error"
          v-model="searchText"
        />
        <div
          @click="modalOpen = true"
          class="tag-search-btn bg-dark-600 ripple flex-center rounded-lg cursor-pointer relative"
          :class="{
            badge: selectedTags.size > 0
          }"
        >
          <IconTag />
        </div>
      </div>
      <div class="row px-1 md:px-0 mt-6 gap-8">
        <div class="contents" v-if="paginatedBlogs.length > 0">
          <BlogCard
            class="col-span-12 md:col-span-6"
            v-for="(blog, i) in paginatedBlogs"
            :blog="blog"
            :key="i"
          />
          <div class="col-span-12 flex-center">
            <pagination
              class="mt-3"
              v-model="page"
              :number-of-pages="numberOfPages"
            />
          </div>
        </div>
        <div class="col-span-12 text-xl text-center md:text-left" v-else>
          <alert leading="😥" title="No blog entries found." />
        </div>
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { TAGS } from "~/utils/constants";
import IconTag from "~icons/mdi/tag-multiple";

const {
  data: allBlogs,
  pending,
  error
} = useLazyFetch("/api/blog", {
  key: "/api/blog"
});

const modalOpen = ref(false);
const selectedTags = ref<Set<string>>(new Set());
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
        selectedTags.value.size > 0 ? selectedTags.value.has(t) : true
      )
  )
);

const paginatedBlogs = computed(() => {
  const start = (page.value - 1) * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;
  return filteredBlogs.value.slice(start, end);
});

const selectTag = (tag: string) => {
  if (selectedTags.value.has(tag)) {
    selectedTags.value.delete(tag);
    return;
  }
  selectedTags.value.add(tag);
};

const handleKeyPress = (e: KeyboardEvent) => {
  if (e.key === "Escape") {
    modalOpen.value = false;
  }
};

watch([searchText, selectedTags], () => {
  page.value = 1;
});

onMounted(() => {
  window.addEventListener("keydown", handleKeyPress);
});

onBeforeUnmount(() => {
  window.removeEventListener("keydown", handleKeyPress);
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
