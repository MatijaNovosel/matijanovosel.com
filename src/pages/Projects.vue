<template>
  <q-page class="q-pt-xl">
    <div
      class="row"
      v-for="n in 10"
      :key="n"
      :class="{
        'q-mt-xl': n !== 1
      }"
    >
      <div class="col-7">
        <img class="project-img" height="250" src="/bg-proj.jpg" />
      </div>
      <div class="col-5 q-pl-xl row justify-center">
        <div class="column justify-center align-center content-center">
          <span class="text-h4 text-bold"> LMS </span>
          <span class="text-body1 q-my-md">
            An application intended for both teachers and students with the purpose of making learning easier.
          </span>
          <q-btn color="orange">
            <q-icon left name="mdi-open-in-new" />
            <div>Visit</div>
          </q-btn>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Projects"
});
</script>

<style>
.project-img {
  border-radius: 8px;
  width: 100%;
}
</style>
