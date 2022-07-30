<template>
  <q-page class="q-pt-none q-pb-lg q-pt-md-lg">
    <BlogBackButton v-if="$route.name !== RouteNames.BLOGS" />
    <router-view />
  </q-page>
</template>

<script lang="ts" setup>
import BlogBackButton from "src/components/BlogBackButton.vue";
import { RouteNames } from "src/router/routeNames";
</script>
