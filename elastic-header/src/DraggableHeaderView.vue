<template>
  <div class="draggable-header-view"
    @mousedown="stargDrag"
    @mousemove="onDrag"
    @mouseup="stopDrag"
    @mouseleave="stopDrag">
    <svg class="bg" width="320" height="560">
      <path :d="headerPath" fill="#3f51b5"></path>
    </svg>
    <div class="header">
      <slot name="header"></slot>
    </div>
    <div class="content" :style="contentPosition">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        dragging: false,
        // 二次贝塞尔曲线控制点
        c: { x: 160, y: 160 },
        start: { x: 0, y: 0 }
      }
    },
    computed: {
      headerPath () {
        return `M0,0 L320,0 320,160 Q${this.c.x},${this.c.y} 0,160`
      },
      contentPosition () {
        const dy = this.c.y - 160
        const dampen = dy > 0? 2: 4
        return {
          transform: `translate3d(0, ${dy/dampen}px, 0)`
        }
      }
    },
    methods: {
      stargDrag (e) {
        this.dragging = true
        this.start.x = e.pageX
        this.start.y = e.pageY
      },
      onDrag (e) {
        if ( this.dragging ) {
          this.c.x = 160 + ( e.pageX - this.start.x )
          const dy = e.pageY - this.start.y
          const dampen = dy > 0? 1.5: 4
          this.c.y = 160 + dy/dampen
        }
      },
      stopDrag () {
        console.log('stop')
        if ( this.dragging ) {
          this.dragging = false
          dynamics.animate(this.c, {
            x: 160,
            y: 160
          }, {
            type: dynamics.spring,
            duration: 700,
            friction: 280
          })
          // this.c.x = 160
          // this.c.y = 160
        }
      }
    }
  }
</script>

<style>
  .draggable-header-view {
    position: relative;
    width: 320px;
    height: 560px;
    margin: 30px auto;
    overflow: hidden;
    color: #fff;
    font-size: 14px;
    user-select: none;
    box-shadow: 0 4px 16px rgba(0,0,0,.15);
    background-color: #fff;
  }
  .draggable-header-view .bg {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
  }
  .draggable-header-view .header,
  .draggable-header-view .content {
    z-index: 1;
  }
  .draggable-header-view .header, .draggable-header-view .content {
    position: relative;
    z-index: 1;
    padding: 30px;
    box-sizing: border-box;
  }
  .draggable-header-view .header {
    height: 160px;
  }
  .draggable-header-view .content {
    color: #333;
    line-height: 1.5em;
  }
  h1 {
    font-weight: 300;
    font-size: 1.8em;
    margin-top: 0;
  }
  a {
    color: #fff;
  }

</style>
