<template>
  <q-page class="q-pt-none q-pb-lg q-pt-md-lg">
    <q-btn
      v-show="$route.name !== RouteNames.BLOGS"
      size="sm"
      no-caps
      color="transparent"
      class="q-mb-lg rounded-btn q-pl-none q-mt-md q-mt-md-none"
      :to="{ name: RouteNames.BLOGS }"
    >
      <q-icon right name="mdi-arrow-left" class="q-mr-sm" />
      <div class="text-h6">Back</div>
    </q-btn>
    <router-view />
  </q-page>
</template>

<script lang="ts" setup>
import { RouteNames } from "src/router/routeNames";
</script>
