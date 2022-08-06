<template>
  <div
    class="justify-center items-center mx-auto w-full flex flex-col max-w-xl mt-10 px-6 md:px-0"
  >
    <img class="me-img" src="/me.jpg" />
    <p class="font-bold mt-6 mb-1 text-3xl md:text-5xl">Matija Novosel</p>
    <p class="text-xl mt-1 text-gray-400">Fullstack developer</p>
    <div class="grid grid-cols-12">
      <div class="col-span-12 text-left mb-0 md:mb-6 mt-4">
        <span class="text-subtitle1 text-gray-400 font-bold"> About me </span>
        <p class="text-justify mt-2">
          Hi. I'm a programmer from Croatia. I like developing applications of
          all sorts and have been interested in doing so from a young age.
          Currently finishing my Masters degree at the Zagreb university of
          applied sciences. Besides programming I enjoy video games, drawing and
          listening to music.
        </p>
      </div>
      <div class="col-span-12 md:col-span-6 text-left mt-4 md:mt-0">
        <span class="text-gray-400 font-bold"> Contact </span>
        <div class="flex flex-col mt-2">
          <span> Zagreb, Croatia </span>
          <span> mnovosel5@gmail.com </span>
          <div class="mt-3">
            <a class="text-white" href="https://github.com/MatijaNovosel">
              <IconGithub :style="{ fontSize: '1.6em' }" />
            </a>
            <a
              class="ml-2"
              href="https://www.linkedin.com/in/matija-novosel-616403161/"
            >
              <IconLinkedin :style="{ fontSize: '1.6em' }" />
            </a>
          </div>
        </div>
      </div>
      <div class="col-span-12 md:col-span-6 mt-4 md:mt-0">
        <span class="text-gray-400 font-bold"> Technologies </span>
        <TechnologyList class="mt-2" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import IconLinkedin from "~icons/logos/linkedin-icon";
import IconGithub from "~icons/mdi/github";

const { setMeta } = useMetadata();
setMeta("Matija Novosel - About me");
</script>

<style scoped>
.me-img {
  border-radius: 14px;
  width: 250px;
  height: 250px;
}

@media only screen and (max-width: 600px) {
  .me-img {
    width: 200px;
    height: 200px;
  }
}
</style>
