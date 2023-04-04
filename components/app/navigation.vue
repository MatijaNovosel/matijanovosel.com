<template>
  <nav class="flex z-4 mt-5 fixed md:absolute text-white gap-2">
    <nuxt-link
      :id="link.to"
      v-for="(link, i) in links"
      :key="i"
      active-class="active-tab"
      :to="link.to"
      class="flex items-center text-xl md:text-3xl nav-tab border-1 bg-dark-400 ripple uppercase"
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
  padding: 0px 12px;
  cursor: pointer;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.active-tab {
  background-color: white;
  color: black;
}
</style>
