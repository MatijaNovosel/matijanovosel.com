<template>
  <div>
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
</template>

<script lang="ts" setup>
import { TechnologyItem } from "~/models/general";
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
</script>
