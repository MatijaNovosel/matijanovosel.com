<template>
  <div class="mt-10 w-full">
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
    <div class="bg-dark-200 mt-5 rounded-lg p-5" v-else>
      <h1>Neka ruta: {{ $route.fullPath }}</h1>
    </div>
  </div>
</template>

<script lang="ts" setup>
import IconArrowLeft from "~icons/mdi/arrow-left";

const route = useRoute();
const loading = ref(true);
const error = ref(false);

onMounted(async () => {
  const { data, pending, error } = await useLazyAsyncData(
    `blog-${route.params.slug}`,
    () => $fetch(`/api/blog/${route.params.slug}`)
  );
  setTimeout(() => {
    loading.value = false;
  }, 3000);
});

const { setMeta } = useMetadata();
setMeta("Matija Novosel - Blogs");
</script>
