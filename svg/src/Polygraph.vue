<template>
  <g>
    <polygon :points="points"></polygon>
    <circle cx="100" cy="100" r="80"></circle>
    <axis-label
      v-for="stat in stats"
      :stat="stat"
      :index="$index"
      :total="stats.length">
    </axis-label>
  </g>

</template>

<script>
  import axisLabel from './AxisLabel.vue'
  import { valueToPoint } from './helper'

  export default {
    props: {
      stats: Array
    },
    computed: {
      points () {
        const total = this.stats.length
        const points = this.stats.map((stat, i) => {
          const point = valueToPoint(stat.value, i, total)
          return point.x + ',' + point.y
        }).join(' ')
        return points
      }
    },
    components: {
      axisLabel
    }
  }
</script>

<style>
  polygon {
    fill: #42b983;
    opacity: 0.75;
  }
  circle {
    fill: transparent;
    stroke: #999;
  }
</style>
