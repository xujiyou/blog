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
    map: {
        home: {
            enter: ["category", "all", "project", "time"]
        },
        category: {
            enter: ["all", "project", "time"],
            leave: ["home"]
        },
        all: {
            enter: ["project", "time"],
            leave: ["home", "category"]
        },
        project: {
            enter: ["time"],
            leave: ["home", "category", "all"]
        },
        time: {
            leave: ["home", "category", "all", "time"]
        }
    }
});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
