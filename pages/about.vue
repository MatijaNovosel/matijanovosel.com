<template>
  <div class="px-3 md:px-0 offset">
    <div class="text-4xl font-bold mb-4 md:mb-6 mt-6 text-center md:text-left">
      About me
    </div>
    <div class="grid grid-cols-12">
      <div class="col-span-12 md:col-span-5 md:pr-5">
        <AboutMeInfo />
        <AboutMeTechnologyList />
      </div>
      <div class="col-span-12 md:col-span-7 mt-5 md:mt-0">
        <AboutMeWorkExperience />
        <AboutMeEducation />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { setMeta } = useMetadata();
setMeta("About me | Matija Novosel");
</script>
