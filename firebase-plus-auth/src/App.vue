<template>
  <div id="app">
    <ul>
      <li class="user" v-for="user in users" transition>
        <span>{{ user.name }} - {{ user.email }}</span>
        <button @click="remove(user)">X</button>
      </li>
    </ul>
    <form id="form" @submit.prevent="addUser">
      <input type="text" v-model="newUser.name">
      <input type="text" v-model="newUser.email">
      <button type="submit">Add User</button>
    </form>
    <ul class="errors">
        <li v-show="nameInvalid">Name can't be empty.</li>
        <li v-show="emailInvalid">Please provide a valid email address.</li>
    </ul>
  </div>
</template>

<script>
import store from './store'
import { add, remove } from './firebaseUsers'

export default {
  data () {
    return {
      newUser: {
        name: '',
        email: '',
      }
    }
  },
  computed: {
    users() {
      return store.state.users
    },
    nameInvalid() {
      return !this.newUser.name.trim().length
    },
    emailInvalid() {
      const emailRE = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return !emailRE.test(this.newUser.email)
    }
  },
  methods: {
    addUser() {
      add(this.newUser)
      this.newUser.name = ''
      this.newUser.email = ''
    },
  }
}
</script>

<style>
body {
  font-family: Helvetica, Arial, sans-serif;
}
ul {
  padding-left: 0;
}
.user {
  height: 30px;
  line-height: 30px;
  padding: 10px;
  border-top: 1px solid #eee;
  overflow: hidden;
  transition: all .25s ease;
}
.user:last-child {
  border-bottom: 1px solid #eee;
}
.v-enter, .v-leave {
  height: 0;
  padding-top: 0;
  padding-bottom: 0;
  border-width: 0;
}
.errors {
  color: #f00;
}
</style>
