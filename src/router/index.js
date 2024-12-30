import {createRouter, createWebHashHistory} from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/status",
    component: () => import("../views/StatusView.vue"),
  },
  {
    path: "/contact",
    component: () => import("../views/ContactView.vue"),
  },
  {
    path: "/about",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/privacy",
    component: () => import("../views/PrivacyView.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    component: () => import("../views/NotFoundView.vue"),
  },
];

const router = createRouter({
  scrollBehavior: () => ({
    behavior: "smooth",
    top: 0,
  }),
  history: createWebHashHistory(),
  routes,
});

export default router;
