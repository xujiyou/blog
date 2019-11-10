import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Article from "../views/Article.vue";
import Category from "../views/Category.vue";
import Project from "../views/Project.vue";
import Time from "../views/Time.vue";

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
        path: "/article",
        name: "article",
        component: Article
    }, {
        path: "/project",
        name: "project",
        component: Project
    }, {
        path: "/time",
        name: "time",
        component: Time
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
