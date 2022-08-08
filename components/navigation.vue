<template>
  <nav
    class="flex space-x-4 md:space-x-6 text-base md:text-lg font-space z-2 w-full justify-center md:justify-end mt-3 md:mt-0"
  >
    <NuxtLink
      v-for="(link, i) in links"
      :key="i"
      active-class="text-orange-300"
      :to="link.to"
      class="link relative flex items-center text-lg md:text-base"
    >
      <component :is="link.icon" class="mx-2 md:mx-0" />
      <span class="hidden md:block ml-2">
        {{ link.text }}
      </span>
    </NuxtLink>
  </nav>
</template>

<script lang="ts" setup>
import { LinkItem } from "@/models";
import IconHome from "~icons/bi/house-fill";
import IconAboutMe from "~icons/ion/person-sharp";
import IconProjects from "~icons/fa-solid/boxes";
import IconBlog from "~icons/mdi/library-books";

const links: LinkItem[] = [
  {
    to: "/",
    text: "Home",
    icon: IconHome
  },
  {
    to: "/aboutMe",
    text: "About me",
    icon: IconAboutMe
  },
  {
    to: "/projects",
    text: "Projects",
    icon: IconProjects
  },
  {
    to: "/blog",
    text: "Blog",
    icon: IconBlog
  }
];
</script>
