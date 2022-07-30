<template>
  <div>
    <div
      class="blog-img q-mb-md"
      :style="{
        backgroundImage: 'url(/vue.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        height: `${smAndDown() ? 350 : 400}px`
      }"
    />
    <div class="column q-my-lg">
      <span :class="smAndDown() ? 'text-h4' : 'text-h3'" class="text-bold">
        &lt;script setup&gt; vs defineComponent
      </span>
      <span class="text-grey-5 q-mt-md">
        Published on
        <span class="text-orange-4">
          {{ formatMonth(new Date()) }}
        </span>
      </span>
    </div>
    <div class="bg-dark q-pa-md q-mb-xl blog-desc">
      <span>
        With the creation of Vue 3 the community has been introduced to a new, more function oriented, way of
        coding.
      </span>
    </div>
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
