import { createRouter, createWebHistory } from "vue-router";
import MainLogin from "../views/MainLogin.vue";

const routes = [
  {
    path: "/",
    name: "MainLogin",
    component: MainLogin,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
