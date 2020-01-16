import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import UserService from "./UserService";
import VModal from "vue-js-modal";

Vue.use(VModal);

// Vue.config.productionTip = false;
async function init() {
  new Vue({
    router,
    store,
    render: function(h) {
      return h(App);
    }
  }).$mount("#app");
  let user = await UserService.Authenticate();
  if (user) {
    store.commit("setUser", user);
  } else {
    router.push({ name: "login" });
  }
}
init();
