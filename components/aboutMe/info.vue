<template>
  <div class="bg-dark-800 rounded-lg text-left">
    <div class="font-bold py-5 text-xl bg-green-vue rounded-t-lg header"></div>
    <div class="pt-3 text-gray-300 text-sm p-5">
      <div class="me" />
      <p class="mt-5 text-4xl text-white font-bold text-center">
        Matija Novosel
      </p>
      <p class="mt-5">
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
.header {
  margin-top: 100px;
}

.me {
  width: 160px;
  height: 160px;
  border-radius: 100%;
  margin: -110px auto 0px auto;
  border: 12px solid var(--vue-green);
  background: url("https://jizipjmjieshqxsqkvgw.supabase.co/storage/v1/object/public/bucket/me.jpg");
  background-size: contain;
}
</style>
