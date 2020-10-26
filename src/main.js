import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify'
import router from './router'
import store from './store'

Vue.config.productionTip = false
/*
export const eventBus = new Vue({
  methods: {
    selecionarContato(contatoSelecionado) {
      this.$emit('selecionarContato', contatoSelecionado)
    },
    atualizarContato(contatoAtualizado) {
      this.$emit('atualizarContato', contatoAtualizado)
    }
  }
})
*/
new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
