import { createApp } from "vue";
import App from "./App.vue";
import "..\\node_modules\\bootstrap\\dist\\css\\bootstrap.css";
import "..\\node_modules\\bootstrap-vue\\dist\\bootstrap-vue.css";
import "..\\node_modules/\\bootstrap-vue\\dist\\bootstrap-vue.min.js";
import "..\\node_modules/\\bootstrap-vue\\dist\\bootstrap-vue";
import "..\\node_modules/\\bootstrap-vue\\dist\\bootstrap-vue.common";
import router from "./routers/index";

createApp(App).use(router).mount("#app");
