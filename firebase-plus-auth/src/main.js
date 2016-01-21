import Vue from 'vue'
import App from './App.vue'

// register firebase event
import { registerEvent } from './firebaseUsers.js'
registerEvent()

new Vue({
  el: 'body',
  components: { App }
})
