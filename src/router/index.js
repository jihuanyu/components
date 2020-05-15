import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/components",
    name: "components",
    component: () => import("@/layout"),
    children: [
      {
        path: "/button",
        name: "button",
        component: () => import("@/views/button.vue")
      },
      {
        path: "/button",
        name: "button",
        component: () => import("@/views/button.vue")
      },
      {
        path: "/button",
        name: "button",
        component: () => import("@/views/button.vue")
      },
      {
        path: "/button",
        name: "button",
        component: () => import("@/views/button.vue")
      }
    ]
  },
  {
    path: "/",
    redirect: "/components"
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
