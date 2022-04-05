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
                  <h3 class="w-100">Inicia Sesión<strong class="cl1 fs36">.</strong></h3>
                  <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor.</p>
                  <form action="#" class="form-LR" @submit.prevent="login">
                    <div class="form-group">
                      <input type="email" name="email" v-model="email" class="form-control plh0" placeholder="Correo Electrónico" id="">
                    </div>
                    <div class="form-group">
                      <input :type="passwordType" v-model="password" name="password" class="form-control plh0 p-r-35" placeholder="Contraseña" id="">
                      <button type="button" class="btn-view_pd" @click="viewPD(event)">
                        <span :class="iconEyePass"></span>
                      </button>
                    </div>
                    <div class="form-group d-md-flex p-t-5">
                      <div class="d-md-flex align-items-center w-50">
                         <input type="checkbox" id="recordarme" value="true" v-model="remember" name="remember">
                        <label for="recordarme">Recordarme</label>
                      </div>
                      <div class="w-50 text-right ">
                        <a href="#" class="nav-link">Olvidé mi Contraseña</a>
                      </div>
                    </div>
                    <div class="form-group">
                      <button type="submit" class="form-control btn btn-primary rounded submit px-3">
                        Entrar
                      </button>
                    </div>
                    <div class="form-group d-md-flex">
                      <p class="fs12">
                        No estás Registado? <router-link  :to="{name: 'Registrar' }" class="font-wt600">crea una cuenta Nueva <span class="icon-arrow-right1"></span></router-link>
                      </p>
                    </div>
                  </form>
                  <div class="m-t-20">
                    <p class="texts-01 fs10 p-r-35">Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor.</p>
                  </div>
                </div>
             </div>
           </div>
        </div>
        <div class="left-wrap-login">
          <div class="content_left_login w-100 h-100">
            <div class="header_left">
               <router-link  :to="{name: 'Login' }" class=""><img src="~assets/logo.png" alt="" srcset=""></router-link>
            </div>
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
import { route } from "quasar/wrappers";
import { defineComponent } from "vue";
import { mapActions } from 'vuex';


export default defineComponent({
  name: "Login",
  data(){
    return{
      passwordType: 'password',
      iconEyePass: 'icon-eye-blocked',
      email: '',
      password: '',
      remember: 'false'
    }
  },
  methods: {
    ...mapActions('Auth',['doLogin']),
    async login(){
      let data = {
        'email': this.email,
        'password': this.password,
        'remember': this.remember
      }

      try {
        await this.doLogin(data);
        let routes = localStorage.getItem('permissions')
            routes = JSON.parse(routes);

        const toPath =  ( routes[0] == '*' ) ? '/inicio' : routes[0]
        this.$router.push(toPath)
        
      } catch (err) {
          console.log(err.response)
          console.log("hola error");
      }
   
   
 
    },
    viewPD() {
       this.passwordType = this.passwordType === "password" ? "text" : "password";
       this.iconEyePass = this.iconEyePass === "icon-eye-blocked" ? "icon-eye" : "icon-eye-blocked";
    }
  }
});

</script>

<style lang="scss" scoped>
 
</style>
