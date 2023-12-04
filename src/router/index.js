import { createRouter, createWebHistory } from "vue-router";
import mainRoutes from "./main.routes";
import groupRoutes from "./group.routes";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...mainRoutes, ...groupRoutes],
});

export default router;
