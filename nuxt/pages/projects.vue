<template>
  <div class="contents">
    <div class="text-5xl font-bold mt-5">Projects</div>
    <div
      class="grid pt-6 md:pt-8 text-left"
      v-for="(project, i) in projects"
      :key="i"
      :class="{
        'mt-5': i !== 0
      }"
    >
      <div
        class="project-img col-span-12 md:col-span-7"
        :style="{
          backgroundImage: `url(${project.img})`,
          height: `300px`
        }"
      />
      <div class="col-span-12 md:col-span-5 md:pl-6 pt-5 md:pt-0 flex flex-col">
        <span class="text-xl font-bold text-left"> {{ project.title }} </span>
        <span class="mt-2 mb-5 text-gray-300">
          {{ project.description }}
        </span>
        <button class="py-3 rounded-btn">
          <h6>Visit</h6>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ProjectItem } from "~/models/general";

const projects: ProjectItem[] = [
  {
    description:
      "An application intended for both teachers and students with the purpose of making learning easier.",
    img: "/lms.jpg",
    link: "https://github.com/MatijaNovosel/lms",
    title: "LMS"
  },
  {
    description: "Messaging service for the web, based on WhatsApp.",
    img: "/default-proj.jpg",
    link: "https://github.com/MatijaNovosel/chat-app-web",
    title: "Chat app web"
  },
  {
    description:
      "Frontend for the GymDash gym management web application, made as a group task for a college course.",
    img: "/vue.jpg",
    link: "https://github.com/MatijaNovosel/gym-dash-ui",
    title: "GymDash"
  },
  {
    description: "App for tracking personal finances.",
    img: "/default-proj.jpg",
    link: "https://github.com/MatijaNovosel/fin-app",
    title: "FinApp"
  },
  {
    description: "Bullet hell RPG roguelike.",
    img: "/default-proj.jpg",
    link: "https://github.com/MatijaNovosel/heroes-of-crimson",
    title: "Heroes of crimson"
  },
  {
    description: "A video editor made with javascript.",
    img: "/default-proj.jpg",
    link: "https://github.com/MatijaNovosel/video-editor",
    title: "Video editor"
  },
  {
    description: "Pictionary for mobile devices, made with Flutter.",
    img: "/flutter.jpg",
    link: "https://github.com/MatijaNovosel/scribble",
    title: "Scribble"
  },
  {
    description:
      "Finapp mobile implementation, an app for tracking personal finances.",
    img: "/default-proj.jpg",
    link: "https://github.com/MatijaNovosel/fin-app-mobile",
    title: "FinApp mobile"
  }
];

const { setMeta } = useMetadata();
setMeta("Matija Novosel - Projects");
</script>

<style scoped>
.project-img {
  border-radius: 16px;
  width: 100%;
  background-size: cover;
  background-position: center center;
}

.rounded-btn {
  border-radius: 12px !important;
}
</style>
