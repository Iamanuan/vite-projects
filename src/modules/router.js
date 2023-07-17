import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  routes: [
    { name: "首页", component: () => import("../pages/home.vue") },
    {
      name: "关于",
      path: "/about",
      component: () => import("../pages/about.vue"),
    },
  ],
  history: createWebHistory(),
});

export default router;
