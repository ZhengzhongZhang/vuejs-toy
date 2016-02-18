<template>
  <ul id="app">
    <item class="item" :model="treeData"></item>
  </ul>
</template>

<script>
import item from './Item.vue'
import data from './data.json'

export default {
  data () {
    return {
      treeData: data
    }
  },
  components: {
    item
  }
}
</script>

<style>
body {
  font-family: Consolas, monospace;
  color: #444;
}
</style>
