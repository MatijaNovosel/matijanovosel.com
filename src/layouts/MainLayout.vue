<template>
  <q-layout view="lHh Lpr lFf">
    <q-header :class="darkMode ? 'bg-dark' : 'bg-primary'">
      <q-toolbar>
        <q-btn class="q-mr-sm" dense flat icon="mdi-cat" />
        <span class="text-subtitle1"> Matija Novosel </span>
        <q-space />
        <q-toggle
          v-model="state.darkMode"
          :icon="darkMode ? 'mdi-moon-waning-crescent' : 'mdi-white-balance-sunny'"
        />
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, inject, onMounted, reactive, watch } from "vue";
import { useQuasar } from "quasar";
import { RemovableRef } from "@vueuse/core";

interface State {
  darkMode: boolean;
}

export default defineComponent({
  name: "MainLayout",
  setup() {
    const $q = useQuasar();
    const darkMode = inject<RemovableRef<boolean>>("dark-mode");

    const state: State = reactive({
      darkMode: false
    });

    watch(
      () => state.darkMode,
      (val) => {
        $q.dark.set(val);
        if (darkMode) {
          darkMode.value = val;
        }
      }
    );

    onMounted(() => {
      if (darkMode) {
        state.darkMode = darkMode.value;
      }
    });

    return {
      state,
      darkMode
    };
  }
});
</script>
