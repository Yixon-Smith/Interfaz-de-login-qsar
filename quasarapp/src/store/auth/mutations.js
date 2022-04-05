//Funcion para cambiar el estado de las propiedades
export function token(state, token){
    state.token = token;
    window.localStorage.setItem('token', JSON.stringify(token));
}

export function authloginStatus(state, valor){
    state.loginStatus = ( valor == "si" ) ? true : false;
}

export function routes(state, rutas){
    state.routes = rutas;
    window.localStorage.setItem('permissions',JSON.stringify(rutas))
}

// Cerrar Sesion
export function logout(state){
    console.log("cambiamos el estado");
}