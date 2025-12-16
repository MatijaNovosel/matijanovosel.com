<template>
  <div class="h-full w-full pt-5 md:pt-15">
    <div class="about-me">
      <div class="text-5xl font-bold">Hi, I'm Matija!</div>
      <div class="text-xl pt-4 text-gray-700 font-bold">
        A developer from Croatia with a big interest in making applications of
        all sorts.
      </div>
      <div class="text-md pt-2 text-gray-500">
        Currently specializing in frontend development and leveraging various
        frameworks to create robust web, mobile, and desktop applications. I
        also dabble in other side projects such as game development and art.
      </div>
      <div class="text-md pt-2 text-gray-500">
        While you're here, check out my
        <nuxt-link to="projects" class="text-black italic">
          custom components and projects!
        </nuxt-link>
        Or maybe the
        <nuxt-link to="projects" class="text-black italic">blog</nuxt-link>.
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {
  //
});

const { setMeta } = useMetadata();
setMeta("Matija Novosel");
</script>

<style lang="css" scoped>
.about-me {
  max-width: 750px;
}
</style>
