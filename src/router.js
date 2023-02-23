import { createRouter, createWebHistory } from "vue-router";
import registrados from "./views/registrados.vue";
import registros from "./views/registros.vue";

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
];
const router = createRouter({ history: createWebHistory(), routes });
export default router;
