import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/fonts/iconfont.js";
Vue.config.productionTip = false;
import "@/assets/css/style.css";
import Message from "@/components/message";
Vue.prototype.$exMessage = Message;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
