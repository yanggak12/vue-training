import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

Vue.component("yoonsang", {
  // 전역 뷰 컴포넌트
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
