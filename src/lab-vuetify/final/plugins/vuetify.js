import Vue from "vue";
import Vuetify from "vuetify";
import 'vuetify/dist/vuetify.min.css'

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
