const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { name:"Login",path: "", component: () => import("pages/Index.vue") },
      { name: "Registrar",path: "/registrar", component: () => import("pages/Register.vue") },
      { name: "Dashboard",path: "/inicio", component: () => import("pages/Dashboard.vue") }
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
