<template>
  <li>
    <div :class="{bold: isFolder}"
          @click="toggle"
          @dblclick="changeType">
          {{ model.name }}
          <span v-if="isFolder">[{{ open ? '-': '+'}}]</span>
    </div>
    <ul v-show="open" v-if="isFolder">
      <item class="item"
        v-for="model in model.children"
        :model="model"></item>
      <li @click="addChild">+</li>
    </ul>
  </li>
</template>

<script>
export default {
  name: 'item',
  props: {
    model: Object
  },
  data () {
    return {
      open: false
    }
  },
  computed: {
    isFolder () {
      return !!this.model.children && !!this.model.children.length
    }
  },
  methods: {
    toggle () {
      this.open = !this.open
    },
    changeType () {
      console.log('ahal')
      if (!this.isFolder) {
        this.$set('model.children', [])
        this.addChild()
        this.open = true
      }
    },
    addChild () {
      this.model.children.push({
        name: 'new stuff'
      })
    }
  }
}
</script>
<style>
.item {
  cursor: pointer;
}
.bold {
  font-weight: bold;
}
ul {
  padding-left: 1em;
  line-height: 1.5em;
  list-style-type: dot;
}
</style>
