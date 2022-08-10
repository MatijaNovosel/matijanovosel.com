<template>
  <nav
    class="flex space-x-4 md:space-x-6 text-base md:text-lg font-space z-2 w-full justify-center md:justify-end mt-3 md:mt-0"
  >
    <NuxtLink
      v-for="(link, i) in links"
      :key="i"
      active-class="text-orange-300"
      :to="link.to"
      class="link relative flex items-center text-sm md:text-base font-bold"
    >
      {{ link.text }}
    </NuxtLink>
  </nav>
</template>

<script lang="ts" setup>
import { LinkItem } from "@/models";

const links: LinkItem[] = [
  {
    to: "/",
    text: "Home"
  },
  {
    to: "/blog",
    text: "Blog"
  },
  {
    to: "/aboutMe",
    text: "About me"
  },
  {
    to: "/projects",
    text: "Projects"
  }
];
</script>
