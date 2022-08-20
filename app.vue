<template>
  <Html lang="en-US">
    <div class="flex justify-center bg-black text-white px-5 pb-5 min-h-full">
      <div
        ref="page"
        class="max-w-screen-lg w-full relative flex flex-col items-center md:items-end justify-between"
      >
        <AppNavigation />
        <div v-if="isIndex" />
        <NuxtPage />
        <AppFooter />
      </div>
    </div>
  </Html>
</template>

<script lang="ts" setup>
import { useElementSize } from "@vueuse/core";

const page = ref<HTMLElement | null>(null);
const { width, height } = useElementSize(page);

provide("pageDimensions", {
  width,
  height
});

const route = useRoute();

const isIndex = computed(() => {
  return route.name === "index";
});

const { setMeta } = useMetadata();
setMeta("Matija Novosel");
</script>
