<template>
  <div class="contents">
    <div class="text-4xl font-bold mb-3 mt-6 md:mt-10">Projects</div>
    <div class="grid grid-cols-12">
      <div
        v-for="(project, i) in projects"
        :key="i"
        class="col-span-12 md:col-span-6 px-4"
      >
        <ProjectCard :project="project" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ProjectItem } from "@/models";

const projects: ProjectItem[] = [
  {
    description:
      "An application intended for both teachers and students with the purpose of making learning easier.",
    img: "https://jizipjmjieshqxsqkvgw.supabase.co/storage/v1/object/public/bucket/LMS.jpg",
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
    img: "https://jizipjmjieshqxsqkvgw.supabase.co/storage/v1/object/public/bucket/genericVue.jpg",
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
