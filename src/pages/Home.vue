<template>
  <q-page class="row justify-center items-center text-center">
    <div class="col">
      <p class="text-h5">👋 Hi, I'm</p>
      <p class="text-h2 text-bold">Matija Novosel</p>
      <p class="text-h6 text-weight-light text-grey-5">Fullstack developer</p>
    </div>
    <span class="footer-text"> © Matija Novosel </span>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  setup() {
    return {};
  }
});
</script>

<style>
.footer-text {
  position: absolute;
  bottom: 35px;
  left: 0px;
}
</style>
