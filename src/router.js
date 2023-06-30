import { createRouter, createWebHistory } from "vue-router";
import prices from "./views/prices.vue";
import registrados from "./views/registrados.vue";
import registros from "./views/registros.vue";
import suport from "./views/suport.vue";
import todolist from "./views/todolist.vue";
import spc from "./views/SuportCongrats.vue";
import aboutus from "./views/aboutus.vue";
import lgn from "./views/login.vue";

const routes = [
  {
    path: "/registrados",
    name: "registrados",
    component: registrados,
  },

  {
    path: "/",
    name: "registros",
    component: registros,
  },
  {
    path: "/todolist",
    name: "todolist",
    component: todolist,
  },
  {
    path: "/prices",
    name: "prices",
    component: prices,
  },
  {
    path: "/suport",
    name: "suport",
    component: suport,
  },
  {
    path: "/congrats",
    name: "congrats",
    component: spc,
  },
  {
    path: "/aboutus",
    name: "aboutus",
    component: aboutus,
  },
  {
    path: "/login",
    name: "login",
    component: lgn,
  },
];
const router = createRouter({ history: createWebHistory(), routes });
export default router;
