import { EducationItem, ProjectItem } from "~/models";

export const CANVAS_OFFSET = 30;
export const EMOJI_MURDER_LIMIT = 40;
export const EMOJI_SPAWN_INTERVAL = 200;
export const EMOJI_CLEANUP_INTERVAL = 8000;
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
  devops: "#f0a224",
  firebase: "#f0a224"
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
    link: "https://github.com/MatijaNovosel/matijanovosel.com",
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
    description: "A web app for checking off Realm of the mad god loot items.",
    tags: ["firebase", "vue3", "windicss", "vercel", "nuxt3"],
    link: "https://github.com/MatijaNovosel/realm-trove",
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
