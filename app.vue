<template>
  <Html lang="en-US" class="bg-black">
    <Link rel="canonical" href="https://matijanovosel.com/" />
    <Link rel="preconnect" href="https://fonts.googleapis.com" />
    <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
    <Link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap"
    />
    <div class="flex justify-center text-white px-5 pb-5 min-h-full">
      <div
        class="max-w-screen-lg w-full flex flex-col items-center md:items-end justify-between"
      >
        <AppNavigation />
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
