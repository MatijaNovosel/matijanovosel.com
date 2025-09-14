<template>
  <Html lang="en-US">
    <Link rel="canonical" href="https://matijanovosel.com/" />
    <Link rel="preconnect" href="https://fonts.googleapis.com" />
    <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
    <div class="flex justify-center text-white px-5 pb-5 min-h-full">
      <div
        class="max-w-screen-lg w-full flex flex-col items-center justify-between"
      >
        <AppNavigation v-if="$route.name !== 'privacy'" />
        <NuxtPage />
        <AppFooter />
      </div>
    </div>
  </Html>
</template>

<script lang="ts" setup>
const { setMeta } = useMetadata();
setMeta("Matija Novosel");
</script>
