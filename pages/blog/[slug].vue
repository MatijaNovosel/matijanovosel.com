<template>
  <div class="mt-10">
    <NuxtLink to="/blog">
      <button
        class="ripple project-btn px-2 py-1 font-medium text-xl text-gray-100 rounded flex items-center justify-center"
      >
        <IconArrowLeft class="mr-2" />
        <h6>Back</h6>
      </button>
    </NuxtLink>
    <h1>Neka ruta: {{ $route.fullPath }}</h1>
  </div>
</template>

<script lang="ts" setup>
import IconArrowLeft from "~icons/mdi/arrow-left";

const route = useRoute();

const { data, pending, error } = await useLazyAsyncData(
  `blog-${route.params.slug}`,
  () => $fetch(`/api/blog/${route.params.slug}`)
);

const { setMeta } = useMetadata();
setMeta("Matija Novosel - Blogs");
</script>
