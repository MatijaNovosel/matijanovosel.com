<template>
  <div class="px-3 md:px-0 offset">
    <div class="text-4xl font-bold mb-4 md:mb-6 mt-6 text-center md:text-left">
      About me
    </div>
    <div class="grid grid-cols-12">
      <div class="col-span-12 md:col-span-5 md:pr-5 mb-5">
        <AboutMeInfo />
      </div>
      <div class="col-span-12 md:col-span-7">
        <AboutMeTechnologyList />
        <AboutMeWorkExperience />
        <AboutMeEducation />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { setMeta } = useMetadata();
setMeta("Matija Novosel - About me");
</script>
