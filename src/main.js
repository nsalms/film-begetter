import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "modern-css-reset";
import "@/assets/scss/app.scss";

const app = createApp(App);

app.use(router);
app.use(store);

app.mount("#app");
