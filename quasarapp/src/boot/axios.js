import { boot } from 'quasar/wrappers'
import axios from 'axios'

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files

const api = axios.create({ baseURL: 'http://127.0.0.1:8000/' })

export default boot(async ({ app }) => {

  app.config.globalProperties.$axios = axios
  app.config.globalProperties.$api = api

});

export { axios, api }