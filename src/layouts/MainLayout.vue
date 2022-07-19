<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="row justify-center" :class="darkMode ? 'bg-dark' : 'bg-primary'">
      <q-toolbar :style="containerStyle">
        <span class="text-subtitle1"> Matija Novosel </span>
        <q-space />
        <q-tabs v-model="tab" align="center">
          <q-tab name="home" icon="mdi-home" />
          <q-tab name="projects" icon="mdi-package-variant" />
        </q-tabs>
        <q-toggle
          v-model="state.darkMode"
          :icon="darkMode ? 'mdi-moon-waning-crescent' : 'mdi-white-balance-sunny'"
        />
        <q-select class="q-ml-md text-white" borderless dense v-model="state.language" :options="options">
          <template #selected-item="scope">
            <img width="60" height="20" :src="getFlagImageSource(scope.opt.value)" />
          </template>
          <template #option="scope">
            <q-item v-bind="scope.itemProps">
              <q-item-section>
                <img width="60" height="20" :src="getFlagImageSource(scope.opt.value)" />
              </q-item-section>
            </q-item>
          </template>
        </q-select>
      </q-toolbar>
    </q-header>
    <q-page-container class="row justify-center">
      <div class="q-px-md full-width" :style="containerStyle">
        <router-view />
      </div>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { computed, defineComponent, inject, onMounted, reactive, Ref, ref, watch } from "vue";
import { useQuasar } from "quasar";
import { RemovableRef } from "@vueuse/core";
import { useI18n } from "vue-i18n";
import { IDictionary, SelectItem } from "src/models/general";

interface State {
  darkMode: boolean;
  language: SelectItem<string>;
}

export default defineComponent({
  name: "MainLayout",
  setup() {
    const $q = useQuasar();
    const { t, locale } = useI18n({ useScope: "global" });
    const darkMode = inject<RemovableRef<boolean>>("dark-mode");
    const language = inject<RemovableRef<string>>("language");

    const flagSvg: IDictionary = {
      "en-US": "/gb.svg",
      hr: "/hr.svg"
    };

    const maxContainerWidth = computed(() => {
      switch ($q.screen.name) {
        case "xs":
          return 500;
        case "sm":
          return 600;
        case "md":
          return 700;
        case "lg":
          return 900;
        case "xl":
          return 1000;
        default:
          return 700;
      }
    });

    const options: Ref<SelectItem<string>[]> = computed(() => [
      {
        label: t("hr"),
        value: "hr"
      },
      {
        label: t("en-US"),
        value: "en-US"
      }
    ]);

    const containerStyle = computed(() => ({ maxWidth: `${maxContainerWidth.value}px` }));

    const getFlagImageSource = (val: string) => {
      return flagSvg[val];
    };

    const state: State = reactive({
      darkMode: false,
      language: options.value[0]
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

    watch(
      () => state.language,
      ({ value }) => {
        if (language) {
          locale.value = value;
          language.value = value;
          const entry = options.value.find((lang) => lang.value === language.value);
          if (entry) {
            state.language.label = t(entry.value);
          }
        }
      }
    );

    onMounted(() => {
      if (darkMode) {
        state.darkMode = darkMode.value;
      }
      if (language) {
        locale.value = language.value;
        const entry = options.value.find((lang) => lang.value === language.value);
        if (entry) {
          state.language = entry;
        }
      }
    });

    return {
      state,
      darkMode,
      tab: ref("home"),
      containerStyle,
      options,
      getFlagImageSource
    };
  }
});
</script>
