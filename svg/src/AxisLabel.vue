<template>
  <text :x="point.x" :y="point.y">{{ stat.label }}</text>
</template>

<script>
  import { valueToPoint } from './helper'

  export default {
    props: {
      stat: Object,
      index: Number,
      total: Number
    },
    computed: {
      point () {
        return valueToPoint(+this.stat.value + 10, this.index, this.total)
      }
    }
  }
</script>

<style>
  text {
    font-family: Helvetica, sans-serif;
    font-size: 10px;
    fill: #666;
  }
</style>
