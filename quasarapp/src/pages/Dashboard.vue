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
                                    <a href="">Inicio</a>
                                </li>
                                
                                <li class="nav__items ">
                                    <div class="svg-icon">
                                        <span class="icon-Vector-3"></span>
                                    </div>  
                                    <a href="">Usuarios</a>
                                </li>
                                <li class="nav__items ">
                                    <div class="svg-icon">
                                        <span class="icon-Vector-4"></span>
                                    </div>  
                                    <a href="">Afiliados</a>
                                </li>
                                <li class="nav__items ">
                                    <div class="svg-icon">
                                        <span class="icon-Vector-5"></span>
                                    </div>  
                                    <a href="">Comisiones</a>
                                </li>
                                <li class="nav__items ">
                                    <div class="svg-icon">
                                        <span class="icon-Vector-6"></span>
                                    </div>  
                                    <a href="">Contratos</a>
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
                                        Tablero
                                    </h2>
                                </div>
                                <!-- Page title actions -->
                                <div class="col-auto ms-auto d-print-none">
                                    <div class="btn-list">
                                    <span class="d-none d-sm-inline">
                                        <a href="#" class="btn btn-white bor1">
                                            New Botton
                                        </a>
                                    </span>
                                    <a href="#" class="btn btn-primary d-none d-sm-inline-block" data-bs-toggle="modal" data-bs-target="#modal-report">
                                        <!-- Download SVG icon from http://tabler-icons.io/i/plus -->
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                                        New Button
                                    </a>
                                    <a href="#" class="btn btn-primary d-sm-none btn-icon" data-bs-toggle="modal" data-bs-target="#modal-report" aria-label="Create new report">
                                        <!-- Download SVG icon from http://tabler-icons.io/i/plus -->
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                                    </a>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="page-body">
                            <div>
                                <div class="row row-cards">
                                    <div class="col-sm-6 col-lg-3">
                                        <div class="row row-cards">
                                            <div class="col-sm-6">
                                                <div class="card">
                                                    <div class="card-body p-3 text-center">
                                                        <div class="h1 m-0 cl2">250.000.00$</div>
                                                        <div class="text-muted">Total ventas</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-sm-6">
                                                <div class="card">
                                                    <div class="card-body p-3 text-center">
                                                        <div class="h1 m-0 cl2">230.000.00$</div>
                                                        <div class="text-muted">Balance General</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-sm-6">
                                                <div class="card">
                                                    <div class="card-body p-3 text-center">
                                                        <div class="h1 m-0 cl2">250.000.00$</div>
                                                        <div class="text-muted">Lorem Ipsum</div>
                                                    </div>
                                                </div>
                                            </div>
                                             <div class="col-sm-6">
                                                <div class="card">
                                                    <div class="card-body p-3 text-center">
                                                        <div class="h1 m-0 cl2">250.000.00$</div>
                                                        <div class="text-muted">Lorem Ipsum</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-lg-3">
                                        <div class="h-full p-lr-10 bg-2">
                                            <div class="card-table table-responsive">
                                                <table class="table table-vcenter">
                                                    <thead>
                                                        <th class="bg-2 text-center">Nombre</th>
                                                        <th class="bg-2 text-center">Cedula</th>
                                                        <th class="bg-2 text-center">Valor</th>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td class="bg-2 text-center cl3">Julio Peña</td>
                                                            <td class="bg-2 text-center cl3">1234567890</td>
                                                            <td class="bg-2 text-center cl3">5.000.000</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
    name: "Dashboard",
  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
}
</script>
<style lang="scss" scoped>

 .nav__cont{
    overflow:hidden;
    transition:width .3s ease;
    cursor:pointer;
 }

.text-muted {
    font-size: 12px;
    color: #b4b4b4!important;
}

</style>
