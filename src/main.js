import { createApp } from "vue";
import App from "./App.vue";
import pinia from "./plugins/store";
import router from "./plugins/router";

const app = createApp(App);

app.use(router);
app.use(pinia);

app.mount("#app");
