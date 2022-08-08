<template>
  <Html lang="en-US">
    <div class="min-h-screen flex justify-center bg-black text-white">
      <div
        ref="page"
        class="max-w-screen-lg w-full relative p-4 sm:p-6 md:p-8 flex flex-col items-center"
        :class="isIndex && 'justify-between'"
      >
        <Navigation />
        <NuxtPage />
        <AppFooter v-if="isIndex" />
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
</script>
