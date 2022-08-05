<template>
  <div
    class="justify-center items-center mx-auto center w-full flex flex-col max-w-xl mt-10"
  >
    <img class="me-img" src="/me.jpg" :style="meImgStyle" />
    <p class="font-bold mt-6 mb-1 text-5xl">Matija Novosel</p>
    <p class="text-xl mt-1 text-gray-400">Fullstack developer</p>
    <div class="grid">
      <div class="col-span-12 text-left mb-0 md:mb-6 mt-4">
        <span class="text-subtitle1 text-gray-400 font-bold"> About me </span>
        <p class="text-justify mt-2">
          Hi. I'm a programmer from Croatia. I like developing applications of
          all sorts and have been interested in doing so from a young age.
          Currently finishing my Masters degree at the Zagreb university of
          applied sciences. Besides programming I enjoy video games, drawing and
          listening to music.
        </p>
      </div>
      <div class="col-span-12 md:col-span-6 text-left">
        <span class="text-gray-400 font-bold"> Contact </span>
        <div class="flex flex-col mt-2">
          <span> Zagreb, Croatia </span>
          <span> mnovosel5@gmail.com </span>
          <div class="mt-3">
            <a class="text-white" href="https://github.com/MatijaNovosel">
              <IconGithub :style="{ fontSize: '1.6em' }" />
            </a>
            <a
              class="ml-2"
              href="https://www.linkedin.com/in/matija-novosel-616403161/"
            >
              <IconLinkedin :style="{ fontSize: '1.6em' }" />
            </a>
          </div>
        </div>
      </div>
      <div class="col-span-12 md:col-span-6">
        <span class="text-gray-400 font-bold"> Technologies </span>
        <div class="mt-2">
          <component
            :style="{ fontSize: '1.6em', color: technology.color }"
            v-for="(technology, i) in technologies"
            :key="i"
            :is="technology.icon"
            class="m-1"
            v-tooltip="{
              content: technology.tooltip,
              theme: 'info-tooltip'
            }"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { TechnologyItem } from "~/models/general";
import { computed } from "vue";
import IconLinkedin from "~icons/logos/linkedin-icon";
import IconGithub from "~icons/mdi/github";
import IconVue from "~icons/vscode-icons/file-type-vue";
import IconReact from "~icons/mdi/react";
import IconAngular from "~icons/mdi/angular";
import IconElectron from "~icons/logos/electron";
import IconDotNet from "~icons/mdi/dot-net";
import IconPhp from "~icons/mdi/language-php";
import IconNode from "~icons/mdi/nodejs";
import IconFirebase from "~icons/logos/firebase";
import IconGraphQl from "~icons/logos/graphql";
import IconVisualStudioCode from "~icons/mdi/microsoft-visual-studio-code";
import IconGit from "~icons/mdi/git";
import IconFlutter from "~icons/logos/flutter";
import IconDatabase from "~icons/mdi/database";

const technologies: TechnologyItem[] = [
  {
    color: "",
    icon: IconVue,
    tooltip: "Vue 2, 3, Quasar, Vuetify"
  },
  {
    color: "#4fb1f3",
    icon: IconReact,
    tooltip: "React, React native"
  },
  {
    color: "red",
    icon: IconAngular,
    tooltip: "Angular"
  },
  {
    color: "cyan",
    icon: IconElectron,
    tooltip: "Electron"
  },
  {
    color: "purple",
    icon: IconDotNet,
    tooltip: ".NET Core, MVC"
  },
  {
    color: "grey",
    icon: IconPhp,
    tooltip: "PHP, CakePHP & Symphony"
  },
  {
    color: "green",
    icon: IconNode,
    tooltip: "NodeJS, Express, NestJS"
  },
  {
    color: "",
    icon: IconFirebase,
    tooltip: "Firebase"
  },
  {
    color: "pink",
    icon: IconGraphQl,
    tooltip: "GraphQL"
  },
  {
    color: "#4fb1f3",
    icon: IconVisualStudioCode,
    tooltip: "Visual Studio & Visual Studio Code"
  },
  {
    color: "red",
    icon: IconGit,
    tooltip: "Git"
  },
  {
    color: "",
    icon: IconFlutter,
    tooltip: "Flutter"
  },
  {
    color: "purple",
    icon: IconDatabase,
    tooltip: "MySQL, MSSQL, PostgreSQL"
  }
];

const meImgStyle = computed(() => {
  return {
    width: `250px`,
    height: `250px`
  };
});
</script>

<style>
.me-img {
  border-radius: 14px;
}
</style>
