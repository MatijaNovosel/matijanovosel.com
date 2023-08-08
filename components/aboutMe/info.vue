<template>
  <div class="flex flex-col md:flex-row justify-center items-center">
    <img src="/me.png" />
    <div class="flex flex-col">
      <p>
        Hi, I'm a determined and hard working software developer with 4 years of
        experience in the industry and I continuously strive to improve my
        skills with side projects and hobbies as well as in any professional
        environment.
      </p>
      <p>
        I like developing applications of all sorts and have been interested in
        doing so from a young age.
      </p>
      <p>
        Besides programming I enjoy video games, reading, drawing and listening
        to music.
      </p>
      <p>
        Page style inspired by
        <a
          href="https://www.gameuidatabase.com/gameData.php?id=381#&gid=1&pid=24"
        >
          Alien: Isolation!
        </a>
      </p>
    </div>
  </div>
  <div class="flex justify-center md:justify-end my-5">
    <nuxt-link
      class="ripple rounded px-4 py-1 bg-white text-2xl uppercase text-black"
      to="https://drive.google.com/file/d/1g89PylKfvLmG-XlSuA-xnER3fCW2OWk0/view?usp=sharing"
    >
      Get my CV!
    </nuxt-link>
  </div>
</template>

<style scoped>
p {
  @apply mt-2 text-2xl;
}

a {
  color: rgb(124, 124, 128);
}

img {
  border-radius: 100%;
  width: 200px;
  @apply md:pr-5 ma-auto pb-5 md:pb-0;
}
</style>
