import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import All from "../views/All.vue";
import Category from "../views/Category.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "home",
        component: Home
    }, {
        path: "/category",
        name: "category",
        component: Category
    }, {
        path: "/all",
        name: "all",
        component: All
    }
];

const router = new VueRouter({
    //mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
