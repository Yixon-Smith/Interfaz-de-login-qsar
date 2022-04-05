export function checkAuth(state){
    return state.loginStatus
}

//Imprimir Token
export function getToken(state){
    return state.token;
}

//Imprimir Routes
export function routes(state){
    return state.routes;
}

