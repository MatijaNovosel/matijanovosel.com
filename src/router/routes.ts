import { RouteNames } from "./routeNames";
import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", name: RouteNames.HOME, component: () => import("src/pages/Home.vue") },
      { path: "projects", name: RouteNames.PROJECTS, component: () => import("pages/Projects.vue") },
      { path: "testing", name: RouteNames.TESTING, component: () => import("pages/Testing.vue") }
    ]
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
