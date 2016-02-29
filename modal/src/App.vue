<template>
  <div id="app">
    <button class="btn-modal" @click="showModal = true">show modal</button>
    <modal :show.sync="showModal">
      <h3 slot="header">My Header</h3>
    </modal>
  </div>
</template>

<script>
  import modal from './Modal.vue'

  export default {
    data () {
      return {
        showModal: false
      }
    },
    components: {
      modal
    }
  }
</script>

<style>
  body {
    font-family: Helvetica, sans-serif;
  }
  .btn-modal {
    display: block;
    margin: 10vh auto;
    padding: 0.5rem 1rem;
    background-color: #42b983;
    color: #fff;
    font-size: 1.5rem;
    font-weight: bold;
    box-shadow: 0 5px 0 #328b63;
    cursor: pointer;
    outline: none;
    border: none;
  }
  .btn-modal:active {
    border-top: 5px solid #fff;
    box-shadow: none;
  }
</style>
