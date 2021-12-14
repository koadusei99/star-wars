import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "/people",
        name: "People",
        component: () => import("../components/People.vue"),
      },
      {
        path: "/starships",
        name: "Starships",
        component: () => import("../components/Starships.vue"),
      },
      {
        path: "/vehicles",
        name: "Vehicles",
        component: () => import("../components/Vehicles.vue"),
      },
      {
        path: "/species",
        name: "Species",
        component: () => import("../components/Species.vue"),
      },
    ],
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
