<template>
  <router-view />
</template>

<script lang="ts">
import { useLocalStorage } from "@vueuse/core";
import { defineComponent, provide } from "vue";

export default defineComponent({
  name: "App",
  setup() {
    const darkMode = useLocalStorage("dark-mode", false);
    const pukekoMoved = useLocalStorage("pukeko-moved", false);

    provide("dark-mode", darkMode);
    provide("pukeko-moved", pukekoMoved);

    return {};
  }
});
</script>
