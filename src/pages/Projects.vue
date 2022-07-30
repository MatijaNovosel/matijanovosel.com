<template>
  <q-page class="q-pt-none q-pb-lg q-pt-md-lg text-center">
    <div class="text-h4 text-bold q-mt-md">Projects</div>
    <div
      class="row q-pt-lg q-pt-md-xl text-left"
      v-for="(project, i) in projects"
      :key="i"
      :class="{
        'q-mt-md': i !== 0
      }"
    >
      <div class="col-12 col-md-7">
        <div
          class="project-img"
          :style="{
            backgroundImage: `url(${project.img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            height: `${smAndDown() ? 200 : 300}px`
          }"
        />
      </div>
      <div class="col-12 col-md-5 q-pl-none q-pl-md-xl q-pt-md q-pt-md-none row align-center">
        <div class="column justify-center">
          <span class="text-h4 text-bold text-left"> {{ project.title }} </span>
          <span class="text-body1 q-my-md text-grey-5">
            {{ project.description }}
          </span>
          <q-btn no-caps style="width: 150px" color="dark" class="q-py-sm rounded-btn" :href="project.link">
            <div class="text-h6">Visit</div>
            <q-icon right name="mdi-open-in-new" />
          </q-btn>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts" setup>
import { ProjectItem } from "src/models/general";
import { smAndDown } from "../utils/helpers";

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
    description: "Finapp mobile implementation, an app for tracking personal finances.",
    img: "/default-proj.jpg",
    link: "https://github.com/MatijaNovosel/fin-app-mobile",
    title: "FinApp mobile"
  }
];
</script>

<style scoped>
.project-img {
  border-radius: 16px;
  width: 100%;
}

.rounded-btn {
  border-radius: 12px !important;
}
</style>
