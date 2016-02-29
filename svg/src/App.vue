<template>
  <div id="app">
    <svg width="200" height="200">
      <polygraph :stats="stats"></polygraph>
    </svg>
    <div v-for="stat in stats">
      <label>{{ stat.label }}</label>
      <input type="range" min="0" max="100" v-model="stat.value">
      <span>{{ stat.value }}</span>
      <button @click="remove(stat)">X</button>
    </div>
    <form>
      <input type="text" v-model="newLabel">
      <button @click.prevent="addStat">Add a Stat</button>
    </form>
    <pre id="raw"> {{ stats | json }}</pre>
  </div>
</template>

<script>
  import polygraph from './Polygraph.vue'
  import { stats } from './helper'

  export default {
    data () {
      return {
        stats,
        newLabel: ''
      }
    },
    methods: {
      remove (stat) {
        if ( stats.length === 3 ) {
          window.alert("can't delete more")
        } else {
          this.stats.$remove(stat)
        }
      },
      addStat () {
        if ( !this.newLabel ) return
        this.stats.push({label: this.newLabel, value: 100})
        this.newLabel = ''
      }
    },
    components: {
      polygraph
    }
  }
</script>

<style>
  body {
    font-family: Helvetica, sans-serif;
  }
  #raw {
    position: absolute;
    top: 0;
    left: 300px;
  }
</style>
