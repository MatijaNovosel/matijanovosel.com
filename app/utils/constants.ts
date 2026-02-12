import type {
  EducationItem,
  LinkItem,
  ProjectItem,
  TechnologyItem,
  WorkExperienceItem
} from "~/models";
import IconElectron from "~icons/logos/electron";
import IconFirebase from "~icons/logos/firebase";
import IconFlutter from "~icons/logos/flutter";
import IconGraphQl from "~icons/logos/graphql";
import IconJava from "~icons/logos/java";
import IconJest from "~icons/logos/jest";
import IconSupabase from "~icons/logos/supabase-icon";
import IconIos from "~icons/logos/swift";
import IconTauri from "~icons/logos/tauri";
import IconTypescript from "~icons/logos/typescript-icon";
import IconVite from "~icons/logos/vitejs";
import IconAngular from "~icons/mdi/angular";
import MdiCircleMedium from "~icons/mdi/circle-medium";
import IconDatabase from "~icons/mdi/database";
import IconDotNet from "~icons/mdi/dot-net";
import IconGit from "~icons/mdi/git";
import IconPhp from "~icons/mdi/language-php";
import IconVisualStudioCode from "~icons/mdi/microsoft-visual-studio-code";
import IconNode from "~icons/mdi/nodejs";
import IconReact from "~icons/mdi/react";
import IconAndroid from "~icons/uim/android";
import IconCypress from "~icons/vscode-icons/file-type-cypress";
import MdiHtml from "~icons/vscode-icons/file-type-html";
import IconMongo from "~icons/vscode-icons/file-type-mongo";
import IconVue from "~icons/vscode-icons/file-type-vue";

export const TAGS: Record<string, string> = {
  vue: "#42b883",
  vue2: "#3da677",
  vue3: "#228056",
  ts: "#3178c6",
  markdown: "#ff4200",
  flutter: "#027DFD",
  dotnet: "#67217a",
  dotnetcore: "#673f94",
  mssql: "#e38c00",
  supabase: "#3da677",
  quasar: "#00b4ff",
  vuetify: "#6dcbf2",
  spring: "#77bc1f",
  unity: "#202a34",
  electron: "#437d88",
  express: "#4f9640",
  socketio: "#3d3e34",
  windicss: "#3b82f6",
  vercel: "#000000",
  nuxt3: "#66bd99",
  js: "#e0d053",
  "c#": "#178600",
  github: "#242121",
  tauri: "#3f3d56",
  vite: "#b241fe",
  devops: "#e3971b",
  firebase: "#f0a224",
  npm: "#fb8817"
};

export const PROJECTS: ProjectItem[] = [
  {
    description:
      "A desktop video editor made with Vue and Tauri as a final thesis of my Masters degree, featuring numerous capabilities in a small package.",
    tags: ["tauri", "vue3"],
    link: "https://github.com/MatijaNovosel/montage",
    title: "Montage",
    imageUrl:
      "https://jizipjmjieshqxsqkvgw.supabase.co/storage/v1/object/public/bucket/248578525-6b97064c-2c77-4589-8292-b65b1551e374.png",
    bgColor: "#81C784"
  },
  {
    description:
      "A simple app for taking notes on the go. Also works as a Kanban tool.",
    tags: ["vue3", "supabase"],
    link: "https://neat-memos.vercel.app/#/",
    title: "Neat memos",
    imageUrl:
      "https://jizipjmjieshqxsqkvgw.supabase.co/storage/v1/object/public/bucket/neat-memos.vercel.app_.png",
    bgColor: "#FFCC80"
  },
  {
    description:
      "Live tracking for the public transport of Zagreb city. Features ride sharing, displaying individual trip lines, schedules and advanced filters.",
    tags: ["vue3"],
    link: "https://zet.knork-studio.com/#/home",
    title: "Knork ZET",
    imageUrl:
      "https://jizipjmjieshqxsqkvgw.supabase.co/storage/v1/object/public/bucket/knorkStudio.jpg",
    bgColor: "#FF8A65"
  },
  {
    description:
      "A web application for a popular game called Realm of the Mad God used for tracking loot items and quests. It has a wide user retention and is in use by hundreds of people daily.",
    tags: ["firebase", "vue3", "windicss", "vercel", "nuxt3"],
    link: "https://realm-trove.vercel.app/",
    title: "Realm trove",
    imageUrl:
      "https://jizipjmjieshqxsqkvgw.supabase.co/storage/v1/object/public/bucket/realm-trove.vercel.app_ULDI6X.png",
    bgColor: "#5C6BC0"
  },
  {
    description: "A bullet hell RPG game, work in progress.",
    tags: ["unity"],
    link: "https://github.com/MatijaNovosel/heroes-of-crimson",
    title: "Heroes of Crimson",
    imageUrl:
      "https://jizipjmjieshqxsqkvgw.supabase.co/storage/v1/object/public/bucket/hoc12226.png",
    bgColor: "#FFCC80"
  },
  {
    description:
      "An application intended for both teachers and students with the purpose of making learning easier. Made as a bachelor thesis project.",
    link: "https://github.com/MatijaNovosel/dilligence",
    title: "Dilligence",
    tags: ["vue2", "dotnetcore", "mssql"]
  },
  {
    description: "Personal website.",
    tags: ["supabase", "vue3", "windicss", "vercel", "nuxt3"],
    link: "https://matijanovosel.com/",
    title: "matijanovosel.com"
  },
  {
    description: "Messaging service for the web, based on WhatsApp.",
    tags: ["supabase", "vue3", "quasar"],
    link: "https://github.com/MatijaNovosel/shout",
    title: "Shout"
  },
  {
    description: "App for tracking personal finances.",
    tags: ["dotnetcore", "vue3", "quasar"],
    link: "https://github.com/MatijaNovosel/avarice",
    title: "Avarice"
  }
];

export const OTHER_PROJECTS: ProjectItem[] = [
  {
    description: "My opinionated list of JavaScript utilities.",
    link: "https://matija-utils-docs.vercel.app/",
    title: "matija-utils",
    tags: ["ts", "npm"]
  }
];

export const COMPONENTS: ProjectItem[] = [
  {
    description: "An avatar editor component for Vue 3.",
    link: "https://github.com/MatijaNovosel/avatar-editor",
    title: "Avatar editor",
    tags: ["ts", "npm", "vue"]
  },
  {
    description: "A material date picker component for Vue 3.",
    link: "https://github.com/MatijaNovosel/vue-3-material-date-picker",
    title: "Date picker",
    tags: ["ts", "npm", "vue"]
  },
  {
    description: "A degree picker component for Vue 3.",
    link: "https://github.com/MatijaNovosel/vue-degree-picker",
    title: "Degree picker",
    tags: ["ts", "npm", "vue"]
  },
  {
    description: "A tree view component for Vue 3.",
    link: "https://github.com/MatijaNovosel/vue-tree-view",
    title: "Tree view",
    tags: ["ts", "npm", "vue"]
  },
  {
    description: "A material time picker component for Vue 3.",
    link: "https://github.com/MatijaNovosel/vue-material-time-picker",
    title: "Time picker",
    tags: ["ts", "npm", "vue"]
  },
  {
    description: "A material tri state checkbox component for Vue 3.",
    link: "https://github.com/MatijaNovosel/tri-state-checkbox",
    title: "Tri state checkbox",
    tags: ["ts", "npm", "vue"]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    duration: "September 2020 - July 2023",
    title: "Master of engineering in information technology",
    name: "Zagreb university of applied sciences",
    link: "https://www.tvz.hr/"
  },
  {
    duration: "September 2017 - July 2020",
    title: "Bachelor of engineering in information technology",
    name: "Zagreb university of applied sciences",
    link: "https://www.tvz.hr/"
  },
  {
    duration: "September 2013 - July 2017",
    title: "Computer technician (Tehnicar za racunarstvo)",
    name: "Tehnicka skola Rudera Boskovica",
    link: "https://www.tsrb.hr/"
  }
];

export const WORK_EXPERIENCE: WorkExperienceItem[] = [
  {
    company: "King ICT",
    position: "Software developer",
    from: new Date("2021-08-01"),
    to: null,
    link: "https://king-ict.com/",
    description: [
      "Developed complex mass transit software using full stack web technologies",
      "Developed, optimized and deployed mobile applications for both Android and iOS used by thousands of people daily",
      "Mentored employees and created educational content for teaching purposes while reviewing pull requests and handling code quality",
      "Efficiently worked at an independent level whilst contributing to the efforts of an agile team"
    ]
  },
  {
    company: "Omega Software",
    position: "Software developer",
    from: new Date("2019-07-01"),
    to: new Date("2021-07-01"),
    link: "https://www.omega-software.hr/",
    description: [
      "Developed software on multiple projects for the Croatian government using full stack web technologies",
      "Mentored and created educational content for new and future employees",
      "Successfully worked at an independent level, while also serving as an effective and enthusiastic collaborator in an agile team"
    ]
  },
  {
    company: "Maidea",
    position: "Junior Software developer (student)",
    from: new Date("2018-05-01"),
    to: new Date("2019-02-01"),
    link: "https://www.maidea.com/",
    description: [
      "Developed software using full stack web technologies under the direction of senior software developers"
    ]
  }
];

export const TECHNOLOGIES: TechnologyItem[] = [
  // Frontend
  {
    color: "",
    icon: IconTypescript,
    tooltip: "JavaScript & TypeScript"
  },
  {
    color: "",
    icon: MdiHtml,
    tooltip: "Bootstrap, Material design, UnoCSS, Tailwind, Kendo"
  },
  {
    color: "",
    icon: IconVue,
    tooltip: "Vuex, Nuxt, Vuetify, Quasar, Pinia"
  },
  {
    color: "",
    icon: IconVite,
    tooltip: "Vite"
  },
  {
    color: "cyan",
    icon: IconElectron,
    tooltip: "Electron"
  },
  {
    color: "",
    icon: IconTauri,
    tooltip: "Tauri"
  },
  {
    color: "red",
    icon: IconAngular,
    tooltip: "Angular"
  },
  {
    color: "#4fb1f3",
    icon: IconReact,
    tooltip: "NextJS, React native, MobX"
  },
  {
    color: "#42b883",
    icon: MdiCircleMedium,
    filler: true
  },
  // Backend
  {
    color: "purple",
    icon: IconDotNet,
    tooltip: ".NET Core, MVC"
  },
  {
    color: "",
    icon: IconJava,
    tooltip: "Spring, Kotlin"
  },
  {
    color: "pink",
    icon: IconGraphQl,
    tooltip: "GraphQL"
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
    icon: IconMongo,
    tooltip: "MongoDB"
  },
  {
    color: "",
    icon: IconFirebase,
    tooltip: "Firebase"
  },
  {
    color: "purple",
    icon: IconDatabase,
    tooltip: "MySQL, MSSQL, PostgreSQL"
  },
  {
    color: "",
    icon: IconSupabase,
    tooltip: "Supabase"
  },
  // Other
  {
    color: "#42b883",
    icon: MdiCircleMedium,
    filler: true
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
    icon: IconCypress,
    tooltip: "Cypress"
  },
  {
    color: "",
    icon: IconJest,
    tooltip: "Jest"
  },
  {
    color: "#42b883",
    icon: MdiCircleMedium,
    filler: true
  },
  // Mobile
  {
    color: "",
    icon: IconFlutter,
    tooltip: "Flutter"
  },
  {
    color: "#42b883",
    icon: IconAndroid,
    tooltip: "Android studio, Jetpack"
  },
  {
    color: "",
    icon: IconIos,
    tooltip: "iOS (Swift, XCode)"
  }
];

export const links: LinkItem[] = [
  {
    to: "/",
    text: "home"
  },
  {
    to: "/blog",
    text: "blog"
  },
  {
    to: "/projects",
    text: "projects"
  },
  {
    to: "/about",
    text: "about me"
  }
];
