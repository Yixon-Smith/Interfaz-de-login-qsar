<template class="bg-1">
    <header>
        <div class="container-menu-desktop">
            <div class="wrap-menu-desktop">
                <div class="limiter-menu-desktop container">
                    <router-link  :to="{name: 'Dashboard' }" class="logo">
                        <img src="~assets/logo-2.png" alt="" srcset="">
                    </router-link>
                    <div class="center-desktop">
                        <div class="search-desktop">
                            <form action="#" class="form_search">
                                <div class="flex-w h-full">
                                    <button type="button" class="flex-c-m">
                                        <span class="icon-search"></span>
                                    </button>
                                    <input type="text" class="h-full" placeholder="Buscar...">
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="wrap-icon-header flex-w flex-r-m">
                        <div class="icon-header-item">
                            <span class="icon-interrogante"></span>
                        </div>
                        <div class="icon-header-item icon-header-noti trans-04" data-notify="2">
                            <span class="icon-notificacion"></span>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    </header>  
       <div class="container p-lr-0">
            <q-layout view="hHh lpR fFf">
                    <div class="btn-toggleLeftDrawer">
                        <q-btn dense flat round icon="icon-arrow_ios" @click="toggleLeftDrawer" class="" />
                    </div>
                    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" class="bg-1">
                        <nav class="nav__cont">
                            <ul class="nav">
                                <li class="nav__items ">
                                    <div class="svg-icon">
                                        <span class="icon-Vector-2"></span>
                                    </div>  
                                    <router-link  :to="{name: 'Dashboard' }">
                                        Inicio
                                    </router-link>
                                </li>
                                
                                <li class="nav__items">
                                    <div class="svg-icon">
                                        <span class="icon-Vector-3"></span>
                                    </div>  
                                    <router-link  :to="{name: 'Usuarios' }">
                                        Usuarios
                                    </router-link>
                                </li>
                                <li class="nav__items">
                                    <div class="svg-icon">
                                        <span class="icon-Vector-4"></span>
                                    </div>  
                                    <router-link  :to="{name: 'Afiliados' }">
                                        Afiliados
                                    </router-link>
                                </li>
                                <li class="nav__items ">
                                    <div class="svg-icon">
                                        <span class="icon-Vector-5"></span>
                                    </div>  
                                    <a href="">Comisiones</a>
                                </li>
                                <li class="nav__items active">
                                    <div class="svg-icon">
                                        <span class="icon-Vector-6"></span>
                                    </div> 
                                    <router-link  :to="{name: 'Contrato' }">
                                        Contrato
                                    </router-link> 
                                </li>
                            </ul>
                            <div class="footer_botton-sidebar">
                                <div class="btn-footer">
                                    <div class="footer-button flex-w">
                                        <img src="~assets/Ellipse.png" />
                                        <div id="title_type">
                                            <span>Jhon Doe</span>
                                            <p>Administrador</p>
                                        </div>
                                        <div class="flex-c-m h-full">
                                            <i class="icon-ellipsis-v"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </q-drawer>

                <q-page-container class="body-page">
                    <div class="page-wrapper">
                        <div class="">
                            <div class="page-header d-print-none">
                                <div class="row align-items-center">
                                <div class="col">
                                    <h2 class="page-title">
                                        Crea Un Nuevo Contrato
                                    </h2>
                                </div>
                                <!-- Page title actions -->
                                <div class="col-auto ms-auto d-print-none">
                                    <div class="btn-list">
                                        <h2 class="page-title">
                                            Numero de contrato  <strong class="cl2" style="margin-left:5px;"> 0001</strong>
                                        </h2>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="page-body mt-4">
                            <div>
                                <form action="#" class="row row-cards">
                                    <div class="col-md-4 col-lg-4">
                                        <div class="card">
                                            <div class="card-body p-3">
                                                <div class="form-group">
                                                    <input type="text" name="nombres_apellidos" class="form-control plh0" placeholder="Nombre y Apellido" id="">
                                                </div>
                                                <div class="form-group">
                                                    <input type="text" name="cedula" class="form-control plh0" placeholder="Cédula" id="">
                                                </div>
                                                <div class="form-group">
                                                    <input type="text" name="ciudad_expedicion" class="form-control plh0" placeholder="Ciudad Expedición" id="">
                                                </div>
                                                <div class="form-group">
                                                    <input type="text" name="cecular" class="form-control plh0" placeholder="Celular" id="">
                                                </div>
                                                <div class="form-group">
                                                    <input type="email" name="email" class="form-control plh0" placeholder="Correo Electrónico" id="">
                                                </div>
                                                <div class="form-group">
                                                    <input type="text" name="direccion" class="form-control plh0" placeholder="Dirección" id="">
                                                </div>
                                                <div class="form-group">
                                                    <div class="form-label fw-300 cl4">Bono Nacional</div>
                                                    <div>
                                                        <label class="form-check form-check-inline">
                                                            <input type="checkbox" class="form-check-input">
                                                            <span class="form-check-label fw-300 cl4"> Ilimitado</span>
                                                        </label>
                                                        <label class="form-check form-check-inline mx-0">
                                                            <input type="checkbox" class="form-check-input">
                                                            <span class="form-check-label fw-300 cl4" > Por año</span>
                                                        </label>
                                                    </div>
                                                    <input type="text" class="form-control" placeholder="000" >
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-lg-4">
                                        <div class="card">
                                            <div class="card-body p-3">
                                                 <div class="form-group">
                                                    <div class="form-label fw-300 cl4">Bono Internacional</div>
                                                    <div>
                                                        <label class="form-check form-check-inline">
                                                            <input type="checkbox" class="form-check-input">
                                                            <span class="form-check-label fw-300 cl4"> Ilimitado</span>
                                                        </label>
                                                        <label class="form-check form-check-inline mx-0">
                                                            <input type="checkbox" class="form-check-input">
                                                            <span class="form-check-label fw-300 cl4" > Por año</span>
                                                        </label>
                                                    </div>
                                                    <input type="text" class="form-control" placeholder="000" >
                                                </div>
                                                <div class="mb-3">
                                                    <label class="form-label">Servicios a prestar</label>
                                                    <div class="form-selectgroup">
                                                        <label class="form-selectgroup-item">
                                                            <input type="checkbox" name="icons" value="user" class="form-selectgroup-input">
                                                            <span class="form-selectgroup-label select_v-0"><!-- Download SVG icon from http://tabler-icons.io/i/user -->
                                                                <svg xmlns="http://www.w3.org/2000/svg" class="icon m-r-5" width="26" height="26" viewBox="0 0 26 26" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                                                Opcion 1
                                                            </span>
                                                        </label>
                                                        <label class="form-selectgroup-item">
                                                            <input type="checkbox" name="icons" value="user" class="form-selectgroup-input">
                                                            <span class="form-selectgroup-label select_v-0"><!-- Download SVG icon from http://tabler-icons.io/i/user -->
                                                                <svg xmlns="http://www.w3.org/2000/svg" class="icon m-r-5" width="26" height="26" viewBox="0 0 26 26" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                                                Opcion Larga 1
                                                            </span>
                                                        </label>
                                                        <label class="form-selectgroup-item">
                                                            <input type="checkbox" name="icons" value="user" class="form-selectgroup-input">
                                                            <span class="form-selectgroup-label select_v-0"><!-- Download SVG icon from http://tabler-icons.io/i/user -->
                                                                <svg xmlns="http://www.w3.org/2000/svg" class="icon m-r-5" width="26" height="26" viewBox="0 0 26 26" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                                                 Opcion Larga 2
                                                            </span>
                                                        </label>
                                                        <label class="form-selectgroup-item">
                                                            <input type="checkbox" name="icons" value="user" class="form-selectgroup-input">
                                                            <span class="form-selectgroup-label select_v-0"><!-- Download SVG icon from http://tabler-icons.io/i/user -->
                                                                <svg xmlns="http://www.w3.org/2000/svg" class="icon m-r-5" width="26" height="26" viewBox="0 0 26 26" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                                                Opcion 2
                                                            </span>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div class="mb-3">
                                                    <span class="form-check-label fw-300 cl4 mb-1" > Fecha de Inicio</span>
                                                    <div class="input-icon">
                                                        <span class="input-icon-addon"><!-- Download SVG icon from http://tabler-icons.io/i/calendar -->
                                                            <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><rect x="4" y="5" width="16" height="16" rx="2"></rect><line x1="16" y1="3" x2="16" y2="7"></line><line x1="8" y1="3" x2="8" y2="7"></line><line x1="4" y1="11" x2="20" y2="11"></line><line x1="11" y1="15" x2="12" y2="15"></line><line x1="12" y1="15" x2="12" y2="18"></line></svg>
                                                        </span>
                                                        <input type="date" class="form-control form-date__input" placeholder="Fecha de Inicio" id="datepicker-icon-prepend">
                                                    </div>
                                                </div>
                                                <div class="mb-3">
                                                    <span class="form-check-label fw-300 cl4 mb-1" > Fecha de Contrato</span>
                                                    <div class="input-icon">
                                                        <span class="input-icon-addon"><!-- Download SVG icon from http://tabler-icons.io/i/calendar -->
                                                            <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><rect x="4" y="5" width="16" height="16" rx="2"></rect><line x1="16" y1="3" x2="16" y2="7"></line><line x1="8" y1="3" x2="8" y2="7"></line><line x1="4" y1="11" x2="20" y2="11"></line><line x1="11" y1="15" x2="12" y2="15"></line><line x1="12" y1="15" x2="12" y2="18"></line></svg>
                                                        </span>
                                                        <input type="date" class="form-control form-date__input" placeholder="Fecha de Inicio" id="datepicker-icon-prepend">
                                                    </div>
                                                </div>
                                                <div class="mb-3">
                                                    <div class="flex-w pb-1">
                                                        <span class="w-50 fw-300 cl4">
                                                            1
                                                        </span>
                                                        <span class="w-50 fw-300 cl4 text-right">
                                                            10
                                                        </span>
                                                    </div>
                                                    <div class="w-100">
                                                        <input type="range" v-model="range" min="1" max="10" step="1" class="w-100"> 
                                                    </div>
                                                    <div class="w-100 text-center mt-1 fw-300 cl4">
                                                        {{ range }}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-lg-4">
                                        <div class="card">
                                            <div class="card-body p-3">
                                                <div class="form-group">
                                                    <input type="text" name="valor_suscripcion" class="form-control plh0" placeholder="$  Valor de suscripcion" id="">
                                                </div>
                                                <div class="form-group">
                                                    <input type="text" name="vabono_inicial" class="form-control plh0" placeholder="$  Abono Inicial" id="">
                                                </div>
                                                <div class="form-group">
                                                    <input type="text" name="numero_coutas" class="form-control plh0" placeholder="Numeros de cuotas" id="">
                                                </div>
                                                <div class="form-group">
                                                    <input type="text" name="valor_coutas" class="form-control plh0" placeholder="Valor de coutas" id="">
                                                </div>
                                                <div class="form-group">
                                                    <div class="flex-w">
                                                        <div class="w-50 p-r-15">
                                                            <span class="cl4 fw-300">Beneficiario</span>
                                                            <select name="beneficiarios" id="">
                                                                <option value="">Opcion 1</option>
                                                            </select>
                                                        </div>
                                                        <div class="w-50 p-l-15">
                                                            <span class="cl4 fw-300" style="opacity:0;">...</span>
                                                            <select name="beneficiarios" id="">
                                                                <option value="">Opcion 2</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-auto ms-auto w-100 d-print-none">
                                                    <div class="btn-list">
                                                        <span class="d-none d-sm-inline w-100">
                                                            <a href="#" class="btn btn-white bor1 w-100">
                                                                General Borrador
                                                            </a>
                                                        </span>
                                                        <a href="#" class="btn btn-primary w-100 d-sm-inline-block" data-bs-toggle="modal" data-bs-target="#modal-report">
                                                            <!-- Download SVG icon from http://tabler-icons.io/i/plus -->
                                                            <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                                                            General Contrato
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </q-page-container>
            </q-layout>
        </div>
</template>

<script>
import { ref } from 'vue'


export default {
    name: "Contrato",
  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  },
  data: () => {
      return {
          range:1
      }
  }
}
</script>
<style lang="scss" scoped>

 

.text-muted {
    font-size: 12px;
    color: #b4b4b4!important;
}

.orderby{
    position: absolute;
    padding: 2px 5px 0px 10px;
}

.orderby-desc span{
-webkit-transform: rotate(90deg);
 -moz-transform: rotate(90deg);
 -ms-transform: rotate(90deg);
 -o-transform: rotate(90deg);
}

.card-table{
    border-radius: 10px;
    padding: 25px 15px;
    background-color: #fff;
}
.card-table tr{
    border: none;
}

.card-table tr:hover{
    background-color: rgba(222, 164, 0, 0.36);
    border-radius: 4px;
}

.card-table tr td{
    color:#333;
    font-size: 12px;
}

.card-table tr td button{
    font-size: 13px;
}

.card-table tr td.flex-w{
    justify-content: end;
}

.white-space-01{
    display: -webkit-box!important;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    -webkit-line-clamp: 1
}

input[type=date] {
appearance: none;
color: #7f7f7f;
border:1px solid #ECF0F1;
background:#ECF0F1;
padding: 4px;
display: inline-block;
visibility: visible;
font-size: 14px;
line-height: 1;
}
input[type=date]:focus {
color: #495057;
background-color: #FFFFFF;
border-color: #80BDFF;
outline: 0;
box-shadow: none;
}

input[type=date]::-webkit-calendar-picker-indicator {
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
color: transparent;
background: 0 0;
margin: 0;
opacity: 0;
pointer-events: auto;
}



input[type=range] {
    //-webkit-appearance: none;
    border-radius: 5px;
    background-color: #cbcbcb;
    height: 4px;
}


 



</style>