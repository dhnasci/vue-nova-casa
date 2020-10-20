import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const ops = {
    icons: {
        iconfont: 'mdi', // default - only for display purposes
    }
}

export default new Vuetify(ops)