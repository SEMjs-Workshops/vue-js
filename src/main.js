import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";

import routes from "./routes";
import vuetify from './plugins/vuetify';

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
