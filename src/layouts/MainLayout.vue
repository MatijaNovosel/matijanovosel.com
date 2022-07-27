<template>
  <q-layout view="lHh Lpr lFf" class="bg-black">
    <q-header :reveal-offset="100" reveal class="row justify-center bg-black">
      <q-toolbar class="q-pt-md" :style="containerStyle">
        <q-space />
        <q-tabs no-caps inline-label narrow-indicator v-model="tab">
          <q-route-tab
            exact
            active-class="text-orange-4"
            v-for="(tab, i) in tabs"
            :key="i"
            :name="tab.name"
            :icon="tab.icon"
            :to="tab.to"
            :label="smAndDown() ? undefined : tab.name"
          />
        </q-tabs>
        <q-space v-if="smAndDown()" />
      </q-toolbar>
    </q-header>
    <q-page-container class="row justify-center">
      <div class="full-width q-px-md bg-black" :style="containerStyle">
        <router-view />
      </div>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { useQuasar } from "quasar";
import { IDictionary, TabItem } from "src/models/general";
import { RouteNames } from "src/router/routeNames";
import { smAndDown } from "src/utils/helpers";

export default defineComponent({
  name: "MainLayout",
  setup() {
    const $q = useQuasar();

    const tabs: TabItem[] = [
      {
        name: "home",
        icon: "fas fa-home",
        to: {
          name: RouteNames.HOME
        }
      },
      {
        name: "about-me",
        icon: "fas fa-user",
        to: {
          name: RouteNames.ABOUT_ME
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
      }
    ];

    const containerSizes: IDictionary<number> = {
      xs: 500,
      sm: 600,
      md: 700,
      lg: 900,
      xl: 1000
    };

    const containerStyle = computed(() => ({ maxWidth: `${containerSizes[$q.screen.name]}px` }));

    return {
      tab: ref("home"),
      containerStyle,
      tabs,
      smAndDown
    };
  }
});
</script>

<style scoped>
:deep(.q-tab__icon) {
  font-size: 16px;
}

:deep(.q-tab__indicator) {
  height: 3px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}
</style>
