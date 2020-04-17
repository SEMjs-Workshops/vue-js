import Vue from "vue";
import "material-design-icons-iconfont/dist/material-design-icons.css";

import App from "./App.vue";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  vuetify,
}).$mount("#app");
