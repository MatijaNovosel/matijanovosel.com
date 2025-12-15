<template>
  <nav class="flex z-4 mt-6 mb-5 w-full justify-end">
    <nuxt-link
      :id="link.to"
      v-for="(link, i) in links"
      :key="i"
      active-class="active-tab"
      :to="link.to"
      class="flex text-xl md:text-md nav-tab"
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
  padding: 4px 12px;
  cursor: pointer;
  user-select: none;
  color: #7373737a;
}

.active-tab {
  color: black;
}
</style>
