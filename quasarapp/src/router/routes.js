const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { 
        name:"Login",
        path: "/", 
        component: () => import("pages/Index.vue") 
      },
      { name: "Registrar",path: "/registrar", component: () => import("pages/Register.vue") },
      { name: "Dashboard",path: "/inicio", component: () => import("pages/Dashboard.vue"), meta: { requireLogin: true } },
      { name: "Usuarios",path: "/usuarios", component: () => import("pages/Usuarios.vue"), meta: { requireLogin: true } },
      { name: "Afiliados",path: "/afiliados", component: () => import("pages/Afiliados.vue"), meta: { requireLogin: true } },
      { name: "Contrato",path: "/contrato", component: () => import("pages/Contrato.vue"), meta: { requireLogin: true } }
    ],
  },
  

  // Always leave this as last one,
  // but you can also remove it
  //process.env.VUE_APP_RUTA_API
  {
    name: 'Error',
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
