<template>
  <q-page class="q-pt-none q-pb-none q-pb-md-lg q-pt-md-lg">
    <BlogBackButton v-if="$route.name !== RouteNames.BLOGS" />
    <router-view v-slot="{ Component, route }">
      <transition
        appear
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
        :duration="300"
        mode="default"
      >
        <div :key="route.path">
          <component :is="Component" />
        </div>
      </transition>
    </router-view>
  </q-page>
</template>

<script lang="ts" setup>
import BlogBackButton from "src/components/BlogBackButton.vue";
import { RouteNames } from "src/router/routeNames";
</script>
