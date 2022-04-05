<template>
  <router-view />
</template>
<script>
import { defineComponent } from "vue";
import { api } from 'boot/axios'

export default defineComponent({
  name: "App",
  beforeCreate(){
      this.$store.dispatch('Auth/init')
      const token = this.$store.getters.getToken
      if (token) {
        api.defaults.headers.common.Authorization = 'Bearer ' + JSON.parse(token)
      } else {
        api.defaults.headers.common.Authorization = ''
      }
  }
});
</script>
