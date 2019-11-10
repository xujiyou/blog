import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vueg from 'vueg'
import "./registerServiceWorker";

Vue.config.productionTip = false;
Vue.use(vueg, router, {
    duration: 1,
    enter: 'fadeIn',
    leave: "fadeIn",
});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
