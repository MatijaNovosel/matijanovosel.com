<template>
  <q-page class="text-center q-mx-auto q-pt-lg q-pt-md-xl" :style="containerStyle">
    <img class="me-img" src="/me.jpg" />
    <p class="text-h3 text-bold q-mt-md">Matija Novosel</p>
    <p class="text-h6 text-weight-light text-grey-5">Fullstack developer</p>
    <div class="row">
      <div class="col-12 text-left q-mb-none q-mb-md-md">
        <span class="text-subtitle1 text-grey-5 text-bold"> About me </span>
        <p class="text-justify text-orange-2 q-mt-sm text-body1">
          Hi. I'm a programmer from Croatia. I like developing applications of all sorts and have been
          interested in doing so from a young age. Currently finishing my Masters degree at the Zagreb
          university of applied sciences.
        </p>
      </div>
      <div class="col-12 col-md-6 text-left q-mb-md q-mb-md-none">
        <span class="text-subtitle1 text-grey-5 text-bold"> Contact </span>
        <div class="row q-mt-sm text-body1 text-orange-2">
          <div class="col-12">
            <span> Zagreb, Croatia </span>
          </div>
          <div class="col-12">
            <span> mnovosel5@gmail.com </span>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6 text-left q-mb-md q-mb-md-none">
        <span class="text-subtitle1 text-grey-5 text-bold"> Technologies </span>
        <div class="row q-mt-sm">
          <q-icon
            class="q-pa-xs"
            v-for="(technology, i) in technologies"
            :key="i"
            :color="technology.color"
            size="30px"
            :name="technology.icon"
          >
            <q-tooltip> {{ technology.tooltip }} </q-tooltip>
          </q-icon>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { useQuasar } from "quasar";
import { IDictionary, TechnologyItem } from "src/models/general";
import { computed, defineComponent } from "vue";

const containerSizes: IDictionary<number> = {
  xs: 500,
  sm: 500,
  md: 500,
  lg: 500,
  xl: 600
};

const technologies: TechnologyItem[] = [
  {
    color: "green-3",
    icon: "fab fa-vuejs",
    tooltip: "Vue 2, 3, Quasar, Vuetify"
  },
  {
    color: "blue-3",
    icon: "fab fa-react",
    tooltip: "React, React native"
  },
  {
    color: "red",
    icon: "fab fa-angular",
    tooltip: "Angular"
  },
  {
    color: "cyan",
    icon: "mdi-electron-framework",
    tooltip: "Electron"
  },
  {
    color: "purple",
    icon: "mdi-dot-net",
    tooltip: ".NET Core, MVC"
  },
  {
    color: "grey",
    icon: "mdi-language-php",
    tooltip: "PHP, CakePHP & Symphony"
  },
  {
    color: "green",
    icon: "fab fa-node-js",
    tooltip: "NodeJS, Express, NestJS"
  },
  {
    color: "amber",
    icon: "mdi-firebase",
    tooltip: "Firebase"
  },
  {
    color: "pink",
    icon: "mdi-graphql",
    tooltip: "GraphQL"
  },
  {
    color: "blue",
    icon: "mdi-microsoft-visual-studio-code",
    tooltip: "Visual Studio & Visual Studio Code"
  },
  {
    color: "red",
    icon: "mdi-git",
    tooltip: "Git"
  },
  {
    color: "blue",
    icon: "mdi-cellphone-information",
    tooltip: "Flutter"
  }
];

export default defineComponent({
  name: "AboutMe",
  setup() {
    const $q = useQuasar();
    const containerStyle = computed(() => ({
      maxWidth: `${containerSizes[$q.screen.name]}px`
    }));

    return {
      containerStyle,
      technologies
    };
  }
});
</script>

<style>
.me-img {
  width: 250px;
  height: 250px;
  border-radius: 8px;
}
</style>
