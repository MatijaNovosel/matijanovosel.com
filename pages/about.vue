<template>
  <div class="px-3 md:px-0 offset">
    <div class="text-4xl font-bold mb-4 md:mb-6 mt-6 text-center md:text-left">
      About me
    </div>
    <AboutMeInfo />
    <AboutMeTechnologyList />
    <AboutMeWorkExperience />
    <AboutMeEducation />
  </div>
</template>

<script lang="ts" setup>
const { setMeta } = useMetadata();
setMeta("About me | Matija Novosel");
</script>
