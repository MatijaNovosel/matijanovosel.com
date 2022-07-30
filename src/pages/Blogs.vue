<template>
  <q-page class="q-pt-none q-pb-lg q-pt-md-lg">
    <q-btn
      size="sm"
      no-caps
      color="transparent"
      class="q-mb-lg rounded-btn q-pl-none"
      :to="{ name: RouteNames.BLOG }"
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
