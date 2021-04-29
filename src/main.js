import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import { store } from './store/store';
import VueResource from "vue-resource";
import "material-design-icons-iconfont";

Vue.config.productionTip = false

Vue.use(VueResource);

new Vue({
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
