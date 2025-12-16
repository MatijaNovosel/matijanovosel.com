<template>
  <div class="contents">
    <transition name="modal">
      <modal title="Filter by tags" v-if="modalOpen" @close="modalOpen = false">
        <div class="flex flex-wrap gap-3">
          <tag
            :background-color="TAGS[tag]"
            v-for="(tag, i) in modalTags"
            :key="i"
            class="cursor-pointer ripple"
            @clicked="selectTag(tag)"
            :selected="selectedTags.has(tag)"
          >
            {{ tag }}
          </tag>
        </div>
      </modal>
    </transition>
    <app-spinner v-if="pending" />
    <alert
      text-color="#d91139"
      title="Something went wrong"
      subtitle="An error ocurred while loading blog entries."
      class="mt-5"
      v-else-if="error"
    />
    <template v-else>
      <div class="flex flex-col gap-4 flex-grow">
        <div class="contents" v-if="filteredBlogs?.length! > 0">
          <nuxt-link
            class="w-full cursor-pointer text-gray-500 hover:(text-gray-400)"
            v-for="(blog, i) in filteredBlogs"
            :key="i"
            :to="`/blog/${blog.id}`"
          >
            <div class="text-lg font-medium">
              {{ blog.title }}
            </div>
            <div class="text-md text-gray-400 mt-1">
              {{ blog.createdAt }}
            </div>
          </nuxt-link>
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

const modalTags = computed(() => [
  ...new Set(allBlogs.value?.flatMap((blog) => blog.tags))
]);

const filteredBlogs = computed(() =>
  allBlogs.value?.filter(
    (b) =>
      b.title.toLowerCase().includes(searchText.value.toLowerCase()) &&
      b.tags.some((t) =>
        selectedTags.value.size > 0 ? selectedTags.value.has(t) : true
      )
  )
);

const selectTag = (tag: string) => {
  if (selectedTags.value.has(tag)) {
    selectedTags.value.delete(tag);
    return;
  }
  selectedTags.value.add(tag);
};

const handleKeyPress = (e: KeyboardEvent) => {
  if (e.key === "Escape") modalOpen.value = false;
};

onMounted(() => window.addEventListener("keydown", handleKeyPress));

onBeforeUnmount(() => window.removeEventListener("keydown", handleKeyPress));

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
  border: 7px solid white;
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
