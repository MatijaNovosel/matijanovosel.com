<template>
  <div class="h-full w-full pt-15">
    <div class="text-5xl font-bold">Hi, I'm Matija!</div>
    <div class="text-xl pt-4 text-gray-700 font-bold">
      A developer from Croatia with a big interest in making applications of all
      sorts.
    </div>
    <div class="text-md pt-4 text-gray-500">
      I'm a determined and hard working software developer with 6 years of
      experience in the industry continuously striving to improve my skills with
      side projects and hobbies as well as in any professional environment.
    </div>
    <div class="text-md pt-2 text-gray-500">
      I have a great passion for frontend development and excel in leveraging
      various frameworks to create robust web, mobile, and desktop applications.
      My adaptability and experience span a wide range of technologies which
      helps me contribute effectively throughout the entire project lifecycle.
    </div>
    <div class="text-md pt-2 text-gray-500">
      Also fully committed to mentoring new team members and ensuring smooth
      onboarding.
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
