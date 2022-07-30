import { RouteNames } from "./routeNames";
import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", redirect: { name: RouteNames.HOME } },
      { path: "home", name: RouteNames.HOME, component: () => import("src/pages/Home.vue") },
      { path: "about-me", name: RouteNames.ABOUT_ME, component: () => import("pages/AboutMe.vue") },
      { path: "projects", name: RouteNames.PROJECTS, component: () => import("pages/Projects.vue") },
      {
        path: "blogs",
        name: RouteNames.BLOG_INDEX,
        component: () => import("src/pages/BlogIndex.vue"),
        children: [
          {
            path: "",
            name: RouteNames.BLOGS,
            component: () => import("pages/BlogList.vue")
          },
          {
            path: "1-script-setup-vs-define-component",
            name: "1-script-setup-vs-define-component",
            component: () => import("src/pages/blogs/1ScriptSetupVsDefineComponent.vue")
          },
          {
            path: "2-vue-2-vs-vue-3",
            name: "2-vue-2-vs-vue-3",
            component: () => import("src/pages/blogs/2Vue2VsVue3.vue")
          }
        ]
      },
      { path: "testing", name: RouteNames.TESTING, component: () => import("pages/Testing.vue") }
    ]
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
