<template>
  <div class="text-center">
    <img
      class="me-img rounded-full mx-auto"
      src="/me.jpg"
      alt="Matija Novosel picture"
    />
    <div class="flex flex-col">
      <p class="font-bold mb-1 mt-5 text-3xl">Matija Novosel</p>
      <p class="text-xl text-gray-400">Fullstack developer</p>
    </div>
  </div>
</template>

<style scoped>
.me-img {
  width: 220px;
  height: 220px;
}

@media only screen and (max-width: 600px) {
  .me-img {
    width: 180px;
    height: 180px;
  }
}
</style>
