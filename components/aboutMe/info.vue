<template>
  <div class="bg-dark-800 rounded-lg text-center py-6">
    <div class="outer mx-auto">
      <img
        class="me-img rounded-full inner"
        src="/me.jpg"
        alt="Matija Novosel picture"
      />
    </div>
    <div class="flex flex-col">
      <p class="font-bold mb-1 mt-5 text-3xl">Matija Novosel</p>
      <p class="text-xl text-green-vue">Fullstack developer</p>
    </div>
    <div class="px-6 pt-5 text-gray-300 text-left">
      <p>
        Hi. I'm a {{ getAge(new Date("1998-09-25T00:00:00")) }} year old
        programmer from Croatia. I like developing applications of all sorts and
        have been interested in doing so from a young age. Currently finishing
        my Masters degree at the Zagreb university of applied sciences.
      </p>
      <p class="mt-2">
        Besides programming I enjoy video games, reading, drawing and listening
        to music.
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getAge } from "~/utils/helpers";
</script>

<style scoped>
.outer {
  width: 220px;
  height: 220px;
  border-radius: 50%;
  position: relative;
  background: linear-gradient(to bottom right, var(--vue-green), #1c5039);
}

.inner {
  position: absolute;
  width: 95%;
  height: 95%;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 8px solid #181818;
}

@media only screen and (max-width: 600px) {
  .outer {
    width: 180px;
    height: 180px;
  }
}
</style>
