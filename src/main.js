import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify'
import router from './router'
import store from './store'
import vuelidate from '@/plugins/vuelidate'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  vuelidate,
  render: h => h(App)
}).$mount('#app')
