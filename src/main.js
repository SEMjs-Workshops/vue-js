import Vue from "vue";
import VueRouter from "vue-router";
import "material-design-icons-iconfont/dist/material-design-icons.css";

import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import routes from "./routes";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes
});

new Vue({
  render: h => h(App),
  vuetify,
  router
}).$mount("#app");
