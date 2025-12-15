<template>
  <div>
    <div class="row mt-5">
      <div class="col-span-12">
        <AboutMeInfo />
      </div>
      <div class="col-span-12 md:col-span-5 md:mr-5">
        <AboutMeTechnologyList />
        <AboutMeEducation class="mt-3" />
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
