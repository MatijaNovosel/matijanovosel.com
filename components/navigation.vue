<template>
  <nav class="flex z-2 w-full justify-center md:justify-end pt-4">
    <div class="nav-slider" />
    <NuxtLink
      v-for="(link, i) in links"
      :key="i"
      active-class="active-tab"
      :to="link.to"
      class="link relative flex items-center text-base md:text-lg font-bold nav-tab"
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

<style scoped>
.nav-slider {
  width: 86px;
  transform: translateX(0px);
  transition-duration: 150ms;
  opacity: 0;
  contain: strict;
  background: rgba(128, 128, 128, 0.368);
  position: absolute;
  top: 9px;
  left: 0;
  border-radius: 4px;
  z-index: -1;
  height: 32px;
  transition: 0.15s ease;
  transition-property: width, transform, opacity;
}

.nav-tab {
  color: grey;
  position: relative;
  display: inline-block;
  padding: 10px 12px;
  text-decoration: none;
  transition: color 0.2s ease;
  outline: none;
  cursor: pointer;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.active-tab {
  color: white;
}

.active-tab::before {
  content: "";
  display: block;
  position: absolute;
  height: 0;
  left: 9px;
  right: 9px;
  bottom: 0;
  border-bottom: 2px solid #42b883;
}
</style>
