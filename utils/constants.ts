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

export const SKULL_EMOJI_URL = "/emojis/skull.png";

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
    description: "A clip editor made with Tauri.",
    tags: ["tauri", "vue3", "vite"],
    link: "https://github.com/MatijaNovosel/montage",
    title: "🎬 Montage"
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
    link: "https://matija-utils-docs.vercel.app/",
    title: "🛠️ matija-utils",
    tags: ["ts", "npm"]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    duration: "September 2020 - Current",
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
    position: "Software developer (student)",
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
    position: "Software developer (student)",
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

export const emojis = [
  "heart",
  "laugh",
  "cool",
  "weary",
  "angry",
  "suggestive",
  "surprised",
  "ok",
  "glad",
  "befuddled",
  "tongue",
  "wink",
  "ooh",
  "crying",
  "joy",
  "nerd"
];
