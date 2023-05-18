import { createRouter, createWebHistory } from "vue-router";
import registrados from "./views/registrados.vue";
import registros from "./views/registros.vue";
import todolist from "./views/todolist.vue"

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
];
const router = createRouter({ history: createWebHistory(), routes });
export default router;
