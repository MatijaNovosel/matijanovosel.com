<template>
  <div class="flex flex-col md:flex-row justify-center items-center">
    <img src="/me.png" />
    <div class="flex flex-col ml-0 md:ml-4">
      <p>
        Hi, I'm a determined and hard working software developer with
        {{ yearsOfExperience(WORK_EXPERIENCE) }}
        years of experience in the industry continuously striving to improve my
        skills with side projects and hobbies as well as in any professional
        environment.
      </p>
      <p>
        I have a great passion for frontend development and excel in leveraging
        various frameworks to create robust web, mobile, and desktop
        applications. My adaptability and experience span a wide range of
        technologies which helps me contribute effectively throughout the entire
        project lifecycle.
      </p>
      <p>
        Also fully committed to mentoring new team members and ensuring smooth
        onboarding.
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

<script setup lang="ts">
import { WORK_EXPERIENCE } from "~/utils/constants";
import { yearsOfExperience } from "~/utils/helpers";
</script>

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
