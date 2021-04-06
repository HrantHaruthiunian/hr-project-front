import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import { store } from './store/store';
import Users from "./components/users/Users.vue";
import UserInputForm from "./components/users/UserInputForm.vue"
import RequestInputForm from "./components/requests/RequestInputForm.vue"
import Requests from "./components/requests/Requests.vue";
import Notations from "./components/notations/Notations.vue";
import VueResource from 'vue-resource';



Vue.config.productionTip = false

Vue.component('app-users', Users)
Vue.component('app-notations', Notations)
Vue.component('app-requests', Requests)
Vue.component('app-user-input', UserInputForm)
Vue.component('app-request-input', RequestInputForm)

Vue.use(VueResource);

new Vue({
  store: store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
