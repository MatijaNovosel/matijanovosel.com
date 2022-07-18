<template>
  <q-layout view="lHh Lpr lFf">
    <q-header :class="state.darkMode ? 'bg-dark' : 'bg-primary'">
      <q-toolbar>
        <q-btn class="q-mr-sm" dense flat icon="mdi-cat" />
        <span class="text-subtitle1"> Matija Novosel </span>
        <q-space />
        <q-toggle
          v-model="state.darkMode"
          :icon="state.darkMode ? 'mdi-moon-waning-crescent' : 'mdi-white-balance-sunny'"
        />
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, watch } from "vue";
import { useQuasar } from "quasar";
import { useStorage } from "@vueuse/core";

interface State {
  darkMode: boolean;
}

const items = ["App", "File", "Edit", "View", "Window", "Help"];

export default defineComponent({
  name: "MainLayout",
  setup() {
    const $q = useQuasar();
    const darkMode = useStorage("dark-mode", false);

    const state: State = reactive({
      darkMode: false
    });

    watch(
      () => state.darkMode,
      (val) => {
        $q.dark.set(val);
        darkMode.value = val;
      }
    );

    onMounted(() => {
      state.darkMode = darkMode.value;
    });

    return {
      items,
      state,
      darkMode
    };
  }
});
</script>
