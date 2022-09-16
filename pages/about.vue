<template>
  <div class="px-3 md:px-0 offset">
    <div class="text-4xl font-bold mb-4 md:mb-6 mt-6 text-center md:text-left">
      About me
    </div>
    <div class="grid grid-cols-12">
      <div class="col-span-12 md:col-span-5 md:pr-5 mb-5 md:mb-0">
        <div class="bg-dark-800 rounded-lg py-6 mb-5">
          <BlogPicture />
        </div>
        <div class="bg-dark-800 mt-5 md:mt-0 p-5 rounded-lg text-gray-300">
          <p>
            Hi. I'm a programmer from Croatia. I like developing applications of
            all sorts and have been interested in doing so from a young age.
            Currently finishing my Masters degree at the Zagreb university of
            applied sciences.
          </p>
          <p class="mt-2">
            Besides programming I enjoy video games, reading, drawing and
            listening to music.
          </p>
        </div>
      </div>
      <div class="col-span-12 md:col-span-7">
        <BlogTechnologyList />
        <div class="bg-dark-800 rounded-lg p-5 mt-5">
          <BlogWorkExperience />
        </div>
        <div class="bg-dark-800 rounded-lg p-5 mt-5">
          <BlogEducation />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { setMeta } = useMetadata();
setMeta("Matija Novosel - About me");
</script>
