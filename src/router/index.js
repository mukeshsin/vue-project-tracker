import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/",
    name: "addProject",
    component: () =>
      import(/* webpackChunkName: "addProject" */ "../views/addProject.vue"),
      redirect:'/view',
      children:[
        {
        path:':view', 
        name:'view',
        component:() =>
        import(/* webpackChunkName: "viewProject" */ "../components/allProject.vue"),props:true 
      },
      {
        path:':view', 
        name:'ongoing',
        component:() =>
        import(/* webpackChunkName: "viewProject" */ "../components/allProject.vue"),props:true 
      },
      {
        path:':view', 
        name:'completed',
        component:() =>
        import(/* webpackChunkName: "viewProject" */ "../components/allProject.vue"),props:true 

      }
      

    
      ]
  },
  {
    path: "/viewProject",
    name: "viewProject",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "viewProject" */ "../views/viewProject.vue"),
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
