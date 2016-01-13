<template>
  <div id="app">
    <div id="container">
      <div class="row">
        <div class="col-md-6 col-md-offset-3">
          <form id="changeRepoForm" @submit.prevent="changeRepo()" class="form-inline">
            <div class="form-group">
              <label for="fullRepoName">Full Repo Name</label>
              <input type="text" name="fullRepoName" v-model="fullRepoName" class="form-control">
            </div>
            <input type="submit" class="btn btn-default" value="Get repo filesystem!">
          </form>
          <explorer v-ref:explorer :username="username" :repo="repo"></explorer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Explorer } from './components'

export default {
  data () {
    return {
      fullRepoName: '',
      username: '',
      repo: ''
    }
  },
  methods: {
    changeRepo() {
      [ this.username, this.repo ] = this.fullRepoName.split('/');

      // send oudated event after explorer componenet's props is updated
      this.$nextTick(() => {
        this.$refs.explorer.$emit('outdated');
      });
    }
  },
  components: {
    Explorer
  }
}
</script>

<style>
body {
  padding-top: 30px;
  font-family: Helvetica, sans-serif;
}
#changeRepoForm {
  margin-bottom: 30px;
}
</style>
