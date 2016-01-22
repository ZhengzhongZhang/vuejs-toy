<template>
  <div id="app">
    <form id="search-form">
      Search <input type="text" v-model="searchQuery">
    </form>
    <grid :data="gridData"
          :columns="gridColumns"
          :filter-key="searchQuery">
    </grid>
  </div>
</template>

<script>
import grid from './components/grid.vue'

export default {
  data () {
    return {
      gridData: [
        { name: 'Chuck Norris', power: Infinity },
        { name: 'Bruce Lee', power: 9000 },
        { name: 'Jackie Chan', power: 7000 },
        { name: 'Jet Li', power: 8000 }
      ],
      gridColumns: [ 'name', 'power' ],
      searchQuery: '',
    }
  },
  components: {
    grid
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
