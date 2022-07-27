<template>
  <q-page
    class="text-center q-mx-auto q-pt-lg q-pt-md-xl q-pb-lg q-px-md q-px-md-none"
    :style="containerStyle"
  >
    <img class="me-img" src="/me.jpg" />
    <p class="text-h3 text-bold q-mt-md">Matija Novosel</p>
    <p class="text-h6 text-weight-light text-grey-5">Fullstack developer</p>
    <div class="row">
      <div class="col-12 text-left q-mb-none q-mb-md-md">
        <span class="text-subtitle1 text-grey-5 text-bold"> About me </span>
        <p class="text-justify text-orange-2 q-mt-sm text-body1">
          Hi. I'm a programmer from Croatia. I like developing applications of all sorts and have been
          interested in doing so from a young age. Currently finishing my Masters degree at the Zagreb
          university of applied sciences. Besides programming I enjoy video games, drawing and listening to
          music.
        </p>
      </div>
      <div class="col-12 text-left q-mb-sm">
        <span class="text-subtitle1 text-grey-5 text-bold"> Work experience </span>
        <q-timeline color="orange-5">
          <q-timeline-entry subtitle="August 2021 - Current">
            <template #title>
              <div class="column">
                <a href="https://king-ict.com/" class="text-white"> King ICT </a>
                <span class="q-mt-xs text-orange-2 text-subtitle2"> Software developer (student) </span>
              </div>
            </template>
            <div class="column">
              <span> 🔸 Software development using full stack web technologies </span>
              <span> 🔸 Development of mobile applications </span>
              <span> 🔸 Mentoring and creating educational content </span>
            </div>
          </q-timeline-entry>
          <q-timeline-entry subtitle="July 2019 - July 2021">
            <template #title>
              <div class="column">
                <a href="https://www.omega-software.hr/" class="text-white"> Omega software </a>
                <span class="q-mt-xs text-orange-2 text-subtitle2">
                  Junior software developer (student)
                </span>
              </div>
            </template>
            <div class="column">
              <span>
                🔸 Software development on multiple company projects using full stack web technologies
              </span>
              <span>
                🔸 Mentoring and creating educational Javascript content for new and future employees
              </span>
            </div>
          </q-timeline-entry>
          <q-timeline-entry subtitle="May 2018 - January 2019">
            <template #title>
              <div class="column">
                <a href="https://www.maidea.com/" class="text-white"> Maidea </a>
                <span class="q-mt-xs text-orange-2 text-subtitle2">
                  Junior software developer (student)
                </span>
              </div>
            </template>
            <p>🔸 Software development using full stack web technologies.</p>
          </q-timeline-entry>
          <q-timeline-entry heading />
        </q-timeline>
      </div>
      <div class="col-12 text-left">
        <span class="text-subtitle1 text-grey-5 text-bold"> Education </span>
        <q-timeline color="orange-5">
          <q-timeline-entry subtitle="September 2020 - Current">
            <template #title>
              <div class="column">
                <a href="https://www.tvz.hr/" class="text-white"> Zagreb university of applied sciences </a>
                <span class="q-mt-xs text-orange-2 text-subtitle2">
                  Master's degree (struc. spec. ing. techn. inf.)
                </span>
              </div>
            </template>
          </q-timeline-entry>
          <q-timeline-entry subtitle="September 2017 - July 2020">
            <template #title>
              <div class="column">
                <a href="https://www.tvz.hr/" class="text-white"> Zagreb university of applied sciences </a>
                <span class="q-mt-xs text-orange-2 text-subtitle2">
                  Bachelor of Engineering in Information Technology (bacc. ing. techn. inf.)
                </span>
              </div>
            </template>
          </q-timeline-entry>
          <q-timeline-entry subtitle="September 2013 - July 2017">
            <template #title>
              <div class="column">
                <a href="https://www.tsrb.hr/" class="text-white"> Tehnička škola Ruđera Boškovića </a>
                <span class="q-mt-xs text-orange-2 text-subtitle2"> Computer technician </span>
              </div>
            </template>
          </q-timeline-entry>
          <q-timeline-entry heading />
        </q-timeline>
      </div>
      <div class="col-12 col-md-6 text-left q-mb-md q-mb-md-none">
        <span class="text-subtitle1 text-grey-5 text-bold"> Contact </span>
        <div class="column q-mt-sm text-body1 text-orange-2">
          <span> Zagreb, Croatia </span>
          <span> mnovosel5@gmail.com </span>
          <div class="q-mt-sm">
            <a class="text-decoration-none text-white" href="https://github.com/MatijaNovosel">
              <q-icon size="35px" name="mdi-github" />
            </a>
            <a
              class="text-decoration-none text-blue q-ml-sm"
              href="https://www.linkedin.com/in/matija-novosel-616403161/"
            >
              <q-icon size="35px" name="mdi-linkedin" />
            </a>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6 text-left q-mb-md q-mb-md-none">
        <span class="text-subtitle1 text-grey-5 text-bold">
          * Technologies <q-tooltip> Hover over the icons! </q-tooltip>
        </span>
        <div class="row q-mt-sm">
          <q-icon
            class="q-pa-xs"
            v-for="(technology, i) in technologies"
            :key="i"
            :color="technology.color"
            size="35px"
            :name="technology.icon"
          >
            <q-tooltip anchor="top middle" self="bottom middle"> {{ technology.tooltip }} </q-tooltip>
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
  },
  {
    color: "purple",
    icon: "mdi-database",
    tooltip: "MySQL, MSSQL, PostgreSQL"
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

.q-timeline__heading-title {
  padding: 0px !important;
}

.q-timeline__content {
  padding-bottom: 20px !important;
}
</style>
