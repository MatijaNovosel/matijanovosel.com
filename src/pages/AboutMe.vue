<template>
  <q-page class="text-center q-pt-xl">
    <img class="me-img" src="/me.jpg" />
    <p class="text-h3 text-bold q-mt-md">Matija Novosel</p>
    <p class="text-h6 text-weight-light text-grey-5">Fullstack developer</p>
    <p>Hi, I like developing applications of all sorts.</p>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AboutMe",
  setup() {
    return {};
  }
});
</script>

<style>
.me-img {
  width: 250px;
  height: 250px;
  border-radius: 8px;
}
</style>
