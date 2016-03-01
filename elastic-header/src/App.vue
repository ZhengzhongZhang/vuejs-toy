<template>
  <div id="app">
    <draggable-header-view>
      <template slot="header">
        <h1>Elastic Draggable SVG Header</h1>
        <p>with <a href="http://vuejs.org" target="_blank">Vue.js</a> + <a href="http://dynamicsjs.com" target="_blank">dynamics.js</a></p>
      </template>
      <template slot="content">
        <p>Note this is just an effect demo - there are of course many additional details if you want to use this in production, e.g. handling responsive sizes, reload threshold and content scrolling. Those are out of scope for this quick little hack. However, the idea is that you can hide them as internal details of a Vue.js component and expose a simple Web-Component-like interface.</p>
      </template>
    </draggable-header-view>
  </div>
</template>

<script>
  import DraggableHeaderView from './DraggableHeaderView.vue'
  export default {
    data () {
      return {
      }
    },
    components: {
      DraggableHeaderView
    }
  }
</script>

<style>
  body {
    font-family: Helvetica, sans-serif;
    background-color: #f3f5f6;
  }
</style>
