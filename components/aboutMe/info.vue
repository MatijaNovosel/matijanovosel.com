<template>
  <div class="rounded-lg text-left">
    <div class="font-bold py-5 text-xl bg-white rounded-t-lg header"></div>
    <div class="pt-3 text-gray-300 p-5 text-sm md:text-base">
      <div class="me" />
      <h6 class="my-5 text-6xl text-white font-bold text-center">
        Matija Novosel
      </h6>
      <p>
        Hi, I'm a determined and hard working software developer with 4 years of
        experience in the industry and I continuously strive to improve my
        skills with side projects and hobbies as well as in any professional
        environment.
      </p>
      <p>
        I like developing applications of all sorts and have been interested in
        doing so from a young age. Currently finishing my Masters degree at the
        Zagreb university of applied sciences.
      </p>
      <p>
        Besides programming I enjoy video games, reading, drawing and listening
        to music.
      </p>
      <div class="flex justify-center md:justify-end mt-5">
        <nuxt-link
          class="ripple rounded px-4 py-1 bg-white text-2xl uppercase text-black"
          to="https://drive.google.com/file/d/1g89PylKfvLmG-XlSuA-xnER3fCW2OWk0/view?usp=sharing"
        >
          Get my CV!
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
p {
  @apply mt-2 text-2xl;
}

.header {
  padding: 50px 0px;
}

.me {
  width: 160px;
  height: 160px;
  border-radius: 100%;
  margin: -110px auto 0px auto;
  border: 12px solid white;
  background: url("https://jizipjmjieshqxsqkvgw.supabase.co/storage/v1/object/public/bucket/me.jpg");
  background-size: contain;
}
</style>
