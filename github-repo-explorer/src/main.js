import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
/* filters */
import { orderByFilename } from './filters'

Vue.use(VueResource);
Vue.filter('orderByFilename', orderByFilename);
Vue.config.debug = true;

new Vue({
  el: 'body',
  components: { App }
})
