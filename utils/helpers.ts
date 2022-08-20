import emojis from "./emojis";

export const randInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const tags = {
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
  "c#": "#178600"
};

const emojiLen = 626;

export const createEmojiImage = (): string => {
  const drawing = document.createElement("canvas");

  drawing.width = 150;
  drawing.height = 150;

  const ctx = drawing.getContext("2d");
  let url = "";

  if (ctx) {
    ctx.beginPath();
    ctx.arc(75, 75, 15, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fill();
    ctx.font = "32pt sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(emojis[randInt(0, emojiLen)], 75, 75);
    url = drawing.toDataURL("image/png");
  }

  drawing.remove();

  return url;
};
