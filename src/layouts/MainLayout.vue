<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="row justify-center bg-dark">
      <q-toolbar class="q-px-md q-py-md" :style="containerStyle">
        <q-item class="q-px-none">
          <q-item-section avatar>
            <q-avatar size="30px" color="orange" text-color="white" icon="mdi-cat" />
          </q-item-section>
          <q-item-section>
            <q-item-label> Matija Novosel </q-item-label>
            <q-item-label caption> Fullstack developer </q-item-label>
          </q-item-section>
        </q-item>
        <q-space />
        <q-tabs narrow-indicator v-model="tab" align="center">
          <q-route-tab
            exact
            active-class="text-orange"
            v-for="(tab, i) in tabs"
            :key="i"
            :name="tab.name"
            :icon="tab.icon"
            :to="tab.to"
          />
        </q-tabs>
        <q-select class="language-select" borderless dense v-model="state.language" :options="options">
          <template #selected-item="scope">
            <img width="60" height="20" :src="getFlagImageSource(scope.opt.value)" />
          </template>
          <template #option="scope">
            <q-item style="min-height: 35px !important; height: 35px !important" v-bind="scope.itemProps">
              <q-item-section>
                <img width="60" height="20" :src="getFlagImageSource(scope.opt.value)" />
              </q-item-section>
            </q-item>
          </template>
        </q-select>
      </q-toolbar>
    </q-header>
    <q-page-container class="row justify-center">
      <div class="full-width q-px-md" :style="containerStyle">
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
import { RouteNames } from "src/router/routeNames";

interface State {
  darkMode: boolean;
  language: SelectItem<string>;
}

export default defineComponent({
  name: "MainLayout",
  setup() {
    const $q = useQuasar();
    const { t, locale } = useI18n({ useScope: "global" });
    const language = inject<RemovableRef<string>>("language");

    const tabs = [
      {
        name: "home",
        icon: "fas fa-home",
        to: {
          name: RouteNames.HOME
        }
      },
      {
        name: "projects",
        icon: "fas fa-boxes-stacked",
        to: {
          name: RouteNames.PROJECTS
        }
      },
      {
        name: "blog",
        icon: "fas fa-book",
        to: {
          name: RouteNames.BLOG
        }
      },
      {
        name: "testing",
        icon: "fas fa-kiwi-bird",
        to: {
          name: RouteNames.TESTING
        }
      }
    ];

    const flagSvg: IDictionary<string> = {
      "en-US": "/gb.svg",
      hr: "/hr.svg"
    };

    const containerSizes: IDictionary<number> = {
      xs: 500,
      sm: 600,
      md: 700,
      lg: 900,
      xl: 1000
    };

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

    const containerStyle = computed(() => ({ maxWidth: `${containerSizes[$q.screen.name]}px` }));

    const getFlagImageSource = (val: string) => {
      return flagSvg[val];
    };

    const state: State = reactive({
      darkMode: false,
      language: options.value[0]
    });

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
      tab: ref("home"),
      containerStyle,
      options,
      getFlagImageSource,
      tabs
    };
  }
});
</script>

<style scoped>
div >>> .q-tab__icon {
  font-size: 20px;
}

.q-toolbar {
  min-height: 0px !important;
  height: 48px !important;
}

div >>> .q-tab__indicator {
  height: 3px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}
</style>
