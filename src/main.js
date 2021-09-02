import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueResource from 'vue-resource'
import VueSimpleAlert from "vue-simple-alert";

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(VueSimpleAlert);
Vue.http.options.root = 'https://zadaniezdalne-default-rtdb.europe-west1.firebasedatabase.app/'

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
