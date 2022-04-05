import { route } from "quasar/wrappers";
import {
  createRouter,
  createMemoryHistory,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";


import routes from "./routes";




/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

console.log("hola paso por aqui");

export default route(function ({ store, ssrContext }) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : process.env.VUE_ROUTER_MODE === "history"
    ? createWebHistory
    : createWebHashHistory;

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(
      process.env.MODE === "ssr" ? void 0 : process.env.VUE_ROUTER_BASE
    ),
  });

  //Funcion Logica para comprobar que esta autentificado y si tiene los permisos concedidos
  Router.beforeEach((to, from, next) => {
    const auth = store.state.Auth
    //Esta autentificado?
    if (to.matched.some(record => record.meta.requireLogin) && !auth.loginStatus) {
      next({
        name: 'Login'
      })
    } else{
      console.log(to);
      const permisos = ( auth.loginStatus ) ? auth.routes : [];
      console.log(permisos);
      if ( auth.loginStatus ){
        const path = (permisos[0] != '*') ? permisos[0] : '/inicio'
        if ( to.name == 'Login' || to.name == 'Registrar'  ){
            next({
              path: path
            })
        }else if ( permisos.length != 0 && permisos[0] != '*'){
          if ( !permisos.includes(to.path) ){
            next({
              path: path
            })
          }
        }
      }
      next()
    } 
  })
  return Router;
});
