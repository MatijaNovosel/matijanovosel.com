<template>
  <Html lang="en-US">
    <div
      class="min-h-screen flex justify-center bg-black text-white transition duration-300"
    >
      <div
        ref="page"
        class="max-w-screen-lg w-full relative p-4 sm:p-6 md:p-8 flex flex-col items-center justify-between"
      >
        <nav
          class="flex space-x-4 md:space-x-6 text-base md:text-lg font-space z-2 w-full justify-end"
        >
          <NuxtLink to="/">Home</NuxtLink>
          <NuxtLink to="/aboutMe">About me</NuxtLink>
          <NuxtLink to="/projects">Projects</NuxtLink>
          <NuxtLink to="/blog">Blog</NuxtLink>
        </nav>
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
</script>
