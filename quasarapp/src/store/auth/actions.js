import { api } from 'boot/axios';

// Accion para Logearse
export const doLogin = async ({ commit, dispatch }, datos = {}) =>{
    await api.post('api/login', datos).then(response => {
        console.log(response.data);
        commit('authloginStatus', 'si');
        dispatch('setPermisos', response.data.routes)
        dispatch('setToken', response.data.access_token)
      })
  
}

export const setToken = async ({commit}, token) => {
    commit('token', token);
}

export const setPermisos = async ({commit}, rutas) =>{
    commit('routes', rutas);
}

export const init = async ({ commit, dispatch }) => {
    const token = localStorage.getItem('token')
    const routes = localStorage.getItem('permissions')
    if (token && routes) {
        await commit('authloginStatus', 'si');
        dispatch('setToken', JSON.parse(token))
        dispatch('setPermisos', JSON.parse(routes))
        api.defaults.headers.common.Authorization = 'Bearer ' + JSON.parse(token)
    }  
}

//Accion Para Salir
export function logout({commit}){

}