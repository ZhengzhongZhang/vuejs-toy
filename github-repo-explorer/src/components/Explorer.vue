<template>
<div class="row">
    <div class="col-md-12">
        <table class="table">
            <caption>{{ path }}</caption>
            <thead>
                <tr>
                    <th>Name</th>
                    <th class="text-right"><button class="btn btn-default btn-xs" @click="goBack()" v-if="path !== '/'">Go Back</button></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="file in files | orderByFilename">
                    <td>
                        <div class="file" v-if="file.type === 'file'">
                            <i class="fa fa-file-o"></i>
                            {{ file.name }}
                        </div>
                        <div class="directory" v-if="file.type === 'dir'">
                            <i class="fa fa-folder-o"></i>
                            <a @click="goTo(file.path)">{{ file.name }}</a>
                        </div>
                    </td>
                    <td class="text-right">
                        <a href="{{ file.download_url }}" download v-if="file.type === 'file'">
                            <i class="fa fa-cloud-download"></i>
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
</template>

<script>
export default {
  data: () => ({
    path: '/',
    files: []
  }),
  props: {
    username: {
      type: String,
      required: true
    },
    repo: {
      type: String,
      required: true
    }
  },
  methods: {
    fetchFiles() {
      this.$http
        .get(`https://api.github.com/repos/${this.username}/${this.repo}/contents${this.path}`)
        .then(response => {
          this.files = response.data;
        })
    },
    goTo(path) {
      this.path = '/'+path;
      this.fetchFiles();
    },
    goBack() {
      this.path = this.path.split('/').slice(0, -1).join('/');
      if (this.path === '') { this.path = '/'; }
      this.fetchFiles();
    }
  },
  events: {
    outdated() {
      this.fetchFiles();
    }
  }
}
</script>

<style>
  .directory a{
    cursor: pointer;
    text-decoration: none;
  }
</style>
