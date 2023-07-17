import { createApp } from "vue";
import App from "./App.vue";
import pinia from "./modules/store";
import router from "./modules/router";

const app = createApp(App);

app.use(router);
app.use(pinia);

app.mount("#app");
