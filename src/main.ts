import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import { APIPlugin } from './plugins/api.plugins';
// import store from './store'

Vue.config.productionTip = false;

Vue.use(APIPlugin);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app');
