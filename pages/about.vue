<template>
  <div class="px-3 md:px-0 offset">
    <div class="text-4xl font-bold mb-4 md:mb-6 mt-6 text-center md:text-left">
      About me
    </div>
    <div class="row">
      <div class="col-span-12">
        <AboutMeInfo />
      </div>
      <div class="col-span-12 md:col-span-5 md:mr-5">
        <AboutMeTechnologyList />
        <AboutMeEducation />
      </div>
      <div class="col-span-12 md:col-span-7">
        <AboutMeWorkExperience />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { setMeta } = useMetadata();
setMeta("About me | Matija Novosel");
</script>
