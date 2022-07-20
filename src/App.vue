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
    const language = useLocalStorage("language", "en-US");

    provide("pukeko-moved", pukekoMoved);
    provide("language", language);

    return {};
  }
});
</script>
