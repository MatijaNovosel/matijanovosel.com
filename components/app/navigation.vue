<template>
  <nav
    class="flex z-4 mt-5 bg-dark-400 md:bg-transparent fixed md:absolute text-white gap-2"
  >
    <nuxt-link
      :id="link.to"
      v-for="(link, i) in links"
      :key="i"
      active-class="active-tab"
      :to="link.to"
      class="relative flex items-center text-xl md:text-3xl nav-tab border-1"
    >
      {{ link.text }}
    </nuxt-link>
  </nav>
</template>

<script lang="ts" setup>
import { links } from "~/utils/constants";
</script>

<style scoped>
.nav-tab {
  position: relative;
  display: inline-block;
  padding: 0px 12px;
  transition: color 0.2s ease;
  outline: none;
  cursor: pointer;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  text-transform: uppercase;
}

.active-tab {
  background-color: white;
  color: black;
}
</style>
