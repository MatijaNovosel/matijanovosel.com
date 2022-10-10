<template>
  <div class="bg-dark-800 rounded-lg text-left">
    <div class="font-bold p-3 text-xl bg-dark-500 rounded-t-lg">
      👨‍💻 Introduction
    </div>
    <div class="pt-3 text-gray-300 text-sm p-5">
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
