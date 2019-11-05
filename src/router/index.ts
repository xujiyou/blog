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
        path: "/all",
        name: "all",
        component: All
    }, {
        path: "/category",
        name: "category",
        component: Category
    }
];

const router = new VueRouter({
    //mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
