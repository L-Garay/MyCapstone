import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Profile from "../views/Profile.vue";
import Create from "../views/Create.vue";
import About from "../views/About.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/profile/:id",
    name: "profile",
    component: Profile
  },
  {
    path: "/create",
    name: "create",
    component: Create
  },
  {
    path: "/about",
    name: "about",
    component: About
  }
];

const router = new VueRouter({
  routes
});

export default router;
