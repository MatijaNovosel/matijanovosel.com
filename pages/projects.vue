<template>
  <div class="offset">
    <div class="text-4xl font-bold mb-5 mt-6 text-center md:text-left">
      Projects
    </div>
    <div class="grid grid-cols-12 gap-4">
      <div
        v-for="(project, i) in projects"
        :key="i"
        class="col-span-12 md:col-span-6"
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
    link: "https://github.com/MatijaNovosel/learning-management-system",
    title: "LMS",
    tags: ["vue2", "dotnetcore", "mssql"]
  },
  {
    description: "Personal website.",
    tags: ["supabase", "vue3", "windicss", "vercel", "nuxt3"],
    link: "https://github.com/MatijaNovosel/matijanovosel.com",
    title: "matijanovosel.com"
  },
  {
    description: "Messaging service for the web, based on WhatsApp.",
    tags: ["supabase", "vue3", "quasar"],
    link: "https://github.com/MatijaNovosel/chat-app-web",
    title: "Chat app web"
  },
  {
    description: "App for tracking personal finances.",
    tags: ["dotnetcore", "vue3", "quasar"],
    link: "https://github.com/MatijaNovosel/fin-app",
    title: "FinApp"
  },
  {
    description:
      "Frontend for the GymDash gym management web application, made as a group task for a college course.",
    tags: ["vue2", "vuetify", "spring"],
    link: "https://github.com/MatijaNovosel/gym-dash-ui",
    title: "GymDash"
  },
  {
    description: "Bullet hell RPG roguelike.",
    tags: ["unity"],
    link: "https://github.com/MatijaNovosel/heroes-of-crimson",
    title: "Heroes of crimson"
  },
  {
    description: "A video editor made with javascript.",
    tags: ["electron", "vue3", "quasar"],
    link: "https://github.com/MatijaNovosel/video-editor",
    title: "Video editor"
  },
  {
    description: "Pictionary for mobile devices, made with Flutter.",
    tags: ["flutter", "express", "socketio"],
    link: "https://github.com/MatijaNovosel/scribble",
    title: "Scribble"
  },
  {
    description:
      "Finapp mobile implementation, an app for tracking personal finances.",
    tags: ["flutter"],
    link: "https://github.com/MatijaNovosel/fin-app-mobile",
    title: "FinApp mobile"
  }
];

const { setMeta } = useMetadata();
setMeta("Matija Novosel - Projects");
</script>
