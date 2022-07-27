const { configure } = require("quasar/wrappers");

module.exports = configure(function (ctx) {
  return {
    supportTS: {
      tsCheckerConfig: {
        eslint: {
          enabled: true,
          files: "./src/**/*.{ts,tsx,js,jsx,vue}"
        }
      }
    },
    boot: [],
    css: ["app.scss"],
    extras: ["mdi-v5", "roboto-font", "material-icons", "fontawesome-v6"],
    build: {
      vueRouterMode: "history",
      chainWebpack() {}
    },
    devServer: {
      server: {
        type: "http"
      },
      port: 8081,
      open: true
    },
    framework: {
      config: { dark: true },
      cssAddon: true,
      plugins: []
    },
    animations: [],
    ssr: {
      pwa: false,
      prodPort: 3000,
      maxAge: 1000 * 60 * 60 * 24 * 30,
      chainWebpackWebserver() {},
      middlewares: [ctx.prod ? "compression" : "", "render"]
    },
    pwa: {
      workboxPluginMode: "GenerateSW",
      workboxOptions: {},
      chainWebpackCustomSW() {},
      manifest: {
        name: "cv",
        short_name: "cv",
        description:
          "Matija Novosel - A fullstack developer from Croatia, I like developing applications of all sorts.",
        display: "standalone",
        orientation: "portrait",
        background_color: "#000000",
        theme_color: "#1d1d1d",
        icons: [
          {
            src: "icons/icon-128x128.png",
            sizes: "128x128",
            type: "image/png"
          },
          {
            src: "icons/icon-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "icons/icon-256x256.png",
            sizes: "256x256",
            type: "image/png"
          },
          {
            src: "icons/icon-384x384.png",
            sizes: "384x384",
            type: "image/png"
          },
          {
            src: "icons/icon-512x512.png",
            sizes: "512x512",
            type: "image/png"
          }
        ]
      }
    },
    cordova: {},
    capacitor: {
      hideSplashscreen: true
    },
    electron: {
      bundler: "packager",
      packager: {},
      builder: {
        appId: "cv"
      },
      chainWebpack() {},
      chainWebpackPreload() {}
    }
  };
});
