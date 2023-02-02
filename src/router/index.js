import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/",
    name: "project",
    component: () =>
      import(/* webpackChunkName: "viewProject" */ "../views/viewProject.vue")
},
  {
    path: "/addProject",
    name: "addProject",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "addProject" */ "../views/addProject.vue"),
  },
  {
    path: "/:patchMatch(.*)*",
    name: "notFound",
    component: () =>
      import(/* webpackChunkName: "404 error" */ "../views/notFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
