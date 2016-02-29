<template>
  <div class="modal-mask" v-show="show" transition="modal">
    <div class="modal-wrapper">
      <div class="modal">
        <header class="modal-header">
          <slot name="header">
            <h3>Modal Header</h3>
          </slot>
        </header>
        <div class="modal-body">
          <slot name="body">
            Adipisicing totam velit unde culpa animi natus corrupti, magni id natus fugiat! Blanditiis quo commodi nesciunt temporibus veniam. Sequi illum debitis ratione delectus eum temporibus ducimus odio assumenda similique nemo?
          </slot>
        </div>
        <footer class="modal-footer">
          <slot name="footer">
            Footer
            <button class="modal-default-btn" @click="show = false">Ok</button>
          </slot>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      show: Boolean
    }
  }
</script>

<style>
  .modal-mask {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9998;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.6);
    transition: opacity 0.3s ease;
  }
  .modal-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  .modal {
    z-index: 9999;
    width: 500px;
    padding: 2rem 1rem;
    background-color: #fff;
    border-radius: 0.25rem;
    box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.4);
    transition: transform 0.3s ease;
  }
  .modal-header h3 {
    margin-top: 0;
    color: #42b983;
  }
  .modal-body {
    margin: 20px 0;
  }
  .modal-default-btn {
    float: right;
  }

  .modal-enter,
  .modal-leave {
    opacity: 0;
  }
  .modal-enter .modal,
  .modal-leave .modal {
    transform: scale(1.2)
  }
</style>
