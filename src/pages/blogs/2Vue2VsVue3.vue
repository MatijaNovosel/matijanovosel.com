<template>
  <div
    class="blog-img q-mb-md"
    :style="{
      backgroundImage: 'url(/vue.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      height: `${smAndDown() ? 200 : 400}px`
    }"
  />
  <div class="column q-my-lg">
    <span :class="smAndDown() ? 'text-h4' : 'text-h3'" class="text-bold"> Vue 2 vs Vue 3 </span>
    <span class="text-grey-5 q-mt-md">
      Published on
      <span class="text-orange-4">
        {{ formatMonth(new Date()) }}
      </span>
    </span>
  </div>
  <div class="bg-dark q-pa-md q-mb-xl blog-desc">
    <span> Work in progress. </span>
  </div>
</template>

<script lang="ts" setup>
import { smAndDown, formatMonth } from "src/utils/helpers";
</script>

<style scoped>
.blog-img {
  border-radius: 16px;
}

.blog-desc {
  border-radius: 16px;
}
</style>
