<template>
  <div id="app">
    <h1>Latest Commits of {{ repo }}</h1>
    <div>
        <input type="text" v-model="input">
        <input type="submit" @click="changeRepo">
    </div>
    <span v-for="branch in branches">
        <input type="radio"
        :id="branch"
        :value="branch"
        v-model="currentBranch">
        <label :for="branch">{{branch}}</label>
    </span>
    <p>{{ repo }}@{{currentBranch}}</p>
    <ul>
        <commit :record="record" v-for="record in commits">
        </commit>
    </ul>
  </div>
</template>

<script>
import Commit from './Commit.vue'

export default {
  data () {
    return {
      repo: 'zhengzhongzhang/vuejs-toy',
      branches: ['master', 'dev'],
      currentBranch: 'master',
      commits: []
    };
  },
  computed: {
    commitsURL() {
      return `https://api.github.com/repos/${this.repo}/commits?per_page=3&sha=${this.currentBranch}`;
    }
  },
  methods: {
    fetchData() {
        if (!this.repo) return;
        var xhr = new XMLHttpRequest();
        xhr.open('get', this.commitsURL);
        xhr.onload = ()=>{
            if (xhr.status === 200) {
                this.commits = JSON.parse(xhr.response);
            } else {
                console.log(xhr.response);
            }
        }
        xhr.send();
    },
    changeRepo() {
        if (!this.repo) return;
        this.repo = this.input;
    }
  },
  watch: {
      currentBranch: 'fetchData',
      repo: 'fetchData'
  },
  created: function() {
      this.fetchData();
  },
  components: {
    Commit
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
a {
  text-decoration: none;
  color: #f66;
}
li {
  line-height: 1.5em;
  margin-bottom: 20px;
}
.author, .date {
  font-weight: bold;
}
</style>
