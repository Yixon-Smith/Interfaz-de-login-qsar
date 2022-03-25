const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { name:"Login",path: "", component: () => import("pages/Index.vue") },
      { name: "Registrar",path: "/registrar", component: () => import("pages/Register.vue") },
      { name: "Dashboard",path: "/inicio", component: () => import("pages/Dashboard.vue") },
      { name: "Usuarios",path: "/usuarios", component: () => import("pages/Usuarios.vue") },
      { name: "Afiliados",path: "/afiliados", component: () => import("pages/Afiliados.vue") },
      { name: "Contrato",path: "/contrato", component: () => import("pages/Contrato.vue") }
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
