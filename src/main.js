import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router.js";
// import navbar from './components/NavBar';
// import titlesStore from '../src/Store/titles'
const app = createApp(App);

app.use(createPinia());
app.use(router);
app.mount("#app");
// app.use(navbar);
// app.use(titlesStore);
