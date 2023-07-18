import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  routes: [
    { name: "首页", component: () => import("../views/home.vue") },
    {
      name: "关于",
      path: "/about",
      component: () => import("../views/about.vue"),
    },
  ],
  history: createWebHistory(),
});

export default router;
