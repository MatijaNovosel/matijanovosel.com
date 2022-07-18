<template>
  <q-layout view="lHh Lpr lFf">
    <q-header :class="state.darkMode ? 'bg-dark' : 'bg-primary'">
      <q-toolbar>
        <q-btn class="q-mr-md" dense flat icon="mdi-apple" />
        <div v-for="(item, i) in items" :key="i" class="q-mr-md cursor-pointer text-subtitle1">
          {{ item }}
        </div>
        <q-space />
        <q-toggle
          v-model="state.darkMode"
          :icon="state.darkMode ? 'mdi-moon-waning-crescent' : 'mdi-white-balance-sunny'"
        />
        <q-btn dense flat icon="airplay" class="gt-xs" />
        <q-btn dense flat icon="battery_charging_full" />
        <q-btn dense flat icon="wifi" />
        <div class="text-subtitle1 q-ml-md">9:41</div>
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
