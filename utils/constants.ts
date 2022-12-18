import {
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
import IconNuxt from "~icons/logos/nuxt-icon";
import IconSupabase from "~icons/logos/supabase-icon";
import IconTauri from "~icons/logos/tauri";
import IconAngular from "~icons/mdi/angular";
import IconDatabase from "~icons/mdi/database";
import IconDotNet from "~icons/mdi/dot-net";
import IconGit from "~icons/mdi/git";
import IconPhp from "~icons/mdi/language-php";
import IconVisualStudioCode from "~icons/mdi/microsoft-visual-studio-code";
import IconNode from "~icons/mdi/nodejs";
import IconReact from "~icons/mdi/react";
import IconVue from "~icons/vscode-icons/file-type-vue";

export const CANVAS_OFFSET = 30;
export const EMOJI_MURDER_LIMIT = 40;
export const EMOJI_SPAWN_INTERVAL = 200;
export const EMOJI_CLEANUP_INTERVAL = 6000;
export const EMOJI_INACTIVITY_INTERVAL = 6000;
export const EMOJI_LEN = 626;
export const REWARD_TIMEOUT = 4000;

export const TAGS = {
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

export const SKULL_EMOJI_URL =
  "data:image/png;base64,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";

export const PROJECTS: ProjectItem[] = [
  {
    description:
      "An application intended for both teachers and students with the purpose of making learning easier.",
    link: "https://github.com/MatijaNovosel/dilligence",
    title: "📚 Dilligence",
    tags: ["vue2", "dotnetcore", "mssql"]
  },
  {
    description: "Personal website.",
    tags: ["supabase", "vue3", "windicss", "vercel", "nuxt3"],
    link: "https://matijanovosel.com/",
    title: "👨‍💻 matijanovosel.com"
  },
  {
    description: "Messaging service for the web, based on WhatsApp.",
    tags: ["supabase", "vue3", "quasar"],
    link: "https://github.com/MatijaNovosel/shout",
    title: "💬 Shout"
  },
  {
    description: "App for tracking personal finances.",
    tags: ["dotnetcore", "vue3", "quasar"],
    link: "https://github.com/MatijaNovosel/avarice",
    title: "💸 Avarice"
  },
  {
    description:
      "A web app for tracking Realm of Mad God loot items and quests used by hundreds of people.",
    tags: ["firebase", "vue3", "windicss", "vercel", "nuxt3"],
    link: "https://www.realm-trove.com/",
    title: "👑 Realm trove"
  },
  {
    description: "Bullet hell RPG roguelike.",
    tags: ["unity"],
    link: "https://github.com/MatijaNovosel/heroes-of-crimson",
    title: "⚔️ Heroes of crimson"
  },
  {
    description: "A video editor made with Tauri.",
    tags: ["tauri", "vue3", "vite"],
    link: "https://github.com/MatijaNovosel/montage",
    title: "🎥 Montage"
  },
  {
    description:
      "Frontend for the GymDash gym management web application, made as a group task for a college course.",
    tags: ["vue2", "vuetify", "spring"],
    link: "https://github.com/MatijaNovosel/gym-dash-ui",
    title: "🏋🏽‍♂️ GymDash"
  },
  {
    description: "Pictionary for mobile devices, made with Flutter.",
    tags: ["flutter", "express", "socketio"],
    link: "https://github.com/MatijaNovosel/scribble",
    title: "📝 Scribble"
  },
  {
    description:
      "Avarice mobile implementation, an app for tracking personal finances.",
    tags: ["flutter"],
    link: "https://github.com/MatijaNovosel/avarice-mobile",
    title: "📱 Avarice mobile"
  }
];

export const OTHER_PROJECTS: ProjectItem[] = [
  {
    description: "My opinionated list of JavaScript utilities.",
    link: "https://github.com/MatijaNovosel/matija-utils",
    title: "🛠️ matija-utils",
    tags: ["ts", "npm"]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    duration: "September 2020 - Current",
    title: "Master's degree (struc. spec. ing. techn. inf.)",
    name: "Zagreb university of applied sciences",
    link: "https://www.tvz.hr/"
  },
  {
    duration: "September 2017 - July 2020",
    title:
      "Bachelor of Engineering in Information Technology (bacc. ing. techn. inf.)",
    name: "Zagreb university of applied sciences",
    link: "https://www.tvz.hr/"
  },
  {
    duration: "September 2013 - July 2017",
    title: "Computer technician (Tehničar za računarstvo)",
    name: "Tehnička škola Ruđera Boškovića",
    link: "https://www.tsrb.hr/"
  }
];

export const WORK_EXPERIENCE: WorkExperienceItem[] = [
  {
    company: "King ICT",
    position: "Software developer (student)",
    from: new Date("2021-08-01"),
    to: null,
    link: "https://king-ict.com/",
    description: [
      "Developed software using full stack web technologies",
      "Developed and deployed mobile applications for both Android and iOS",
      "Mentored employees and created educational content for teaching purposes",
      "Worked efficiently in an Agile team"
    ]
  },
  {
    company: "Omega Software",
    position: "Software developer (student)",
    from: new Date("2019-07-01"),
    to: new Date("2021-07-01"),
    link: "https://www.omega-software.hr/",
    description: [
      "Developed software on multiple company projects for the Croatian government using full stack web technologies",
      "Mentored and created educational content for new and future employees",
      "Worked efficiently in an Agile team"
    ]
  },
  {
    company: "Maidea",
    position: "Junior Software developer (student)",
    from: new Date("2018-05-01"),
    to: new Date("2019-02-01"),
    link: "https://www.maidea.com/",
    description: ["Developed software using full stack web technologies"]
  }
];

export const TECHNOLOGIES: TechnologyItem[] = [
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
  },
  {
    color: "",
    icon: IconSupabase,
    tooltip: "Supabase"
  },
  {
    color: "",
    icon: IconNuxt,
    tooltip: "Nuxt"
  },
  {
    color: "",
    icon: IconTauri,
    tooltip: "Tauri"
  }
];

export const links: LinkItem[] = [
  {
    to: "/",
    text: "Home"
  },
  {
    to: "/blog",
    text: "Blog"
  },
  {
    to: "/projects",
    text: "Projects"
  },
  {
    to: "/about",
    text: "About me"
  }
];
