<template>
  <router-view />
</template>

<script lang="ts">
import { useLocalStorage } from "@vueuse/core";
import { defineComponent, provide } from "vue";

export default defineComponent({
  name: "App",
  setup() {
    const pukekoMoved = useLocalStorage("pukeko-moved", false);
    provide("pukeko-moved", pukekoMoved);

    return {};
  }
});
</script>
