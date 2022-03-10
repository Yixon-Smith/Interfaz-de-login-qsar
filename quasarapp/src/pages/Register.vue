<template>
  <q-page class="bg-style" style="">
    <div class="container-login">
      <div class="wrap-login">
        <div class="wrap-form_login">
           <div class="header-card_form">
             <nav class="dropdown_idioma">
               <select name="idioma" id="">
                 <option value="español" selected>Español (ES)</option>
               </select>
             </nav>
           </div>
           <div class="content-body_form w-100 h-100">
             <div class="content_form h-100">
                <div class="login-wrap w-100">
                  <h3 class="w-100">Crea tu cuenta<strong class="cl1 fs36">.</strong></h3>
                  <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor.</p>
                  <form action="#" class="form-LR">
                    <div class="form-group d-md-flex">
                      <div class="w-50 m-r-10">
                         <input type="text" name="nombre" class="form-control plh0" placeholder="Nombre" id="">
                      </div>
                      <div class="w-50 m-l-10">
                         <input type="text" name="apellido" class="form-control plh0" placeholder="Apellido" id="">
                      </div>
                    </div>
                    <div class="form-group">
                      <input type="email" name="email" class="form-control plh0" placeholder="Correo Electrónico" id="">
                    </div>
                    <div class="form-group">
                      <input :type="passwordType" name="password" class="form-control plh0 p-r-35" placeholder="Contraseña" id="">
                      <button type="button" class="btn-view_pd" @click="viewPD(event)">
                        <span :class="iconEyePass"></span>
                      </button>
                    </div>
                    <div class="form-group p-t-5">
                      <div class="d-md-flex align-items-center w-100">
                         <input type="checkbox" id="recordarme" name="remember">
                        <label for="recordarme"><small>Estoy de acuerdo con los <strong class="cl1">Términos y Condiciones</strong> </small> </label>
                      </div>
                    </div>
                    <div class="form-group">
                      <button type="submit" class="form-control btn btn-primary rounded submit px-3">
                        Crear Cuenta
                      </button>
                    </div>
                    <div class="d-md-flex">
                      <p class="fs12">
                        Ya tienes una Cuenta? <router-link  :to="{name: 'Login' }" class="font-wt600">Inicia Sesíon <span class="icon-arrow-right1"></span></router-link>
                      </p>
                    </div>
                  </form>
                  <div class="">
                    <p class="texts-01 fs10 p-r-35">Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor.</p>
                  </div>
                </div>
             </div>
           </div>
        </div>
        <div class="left-wrap-login">
          <div class="content_left_login w-100 h-100">
            <div class="left-login_footer">
              <h2>
                Bienvenidos a Viajes Signature
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Register",
  data(){
    return{
      passwordType: 'password',
      iconEyePass: 'icon-eye-blocked'
    }
  },
  methods: {
    viewPD() {
       this.passwordType = this.passwordType === "password" ? "text" : "password";
       this.iconEyePass = this.iconEyePass === "icon-eye-blocked" ? "icon-eye" : "icon-eye-blocked";
    }
  }
});

</script>
