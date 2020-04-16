import Vue from "vue";
// import Vuetify from "vuetify/lib";
import Vuetify from "vuetify";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#41b883",
        secondary: "#35495e"
      }
    }
  }
});
