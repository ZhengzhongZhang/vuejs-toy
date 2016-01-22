<template>
  <div>
    <table>
      <thead>
        <tr>
          <th v-for="key in columns"
            @click="sortBy(key)"
            :class="{active: key === sortKey}">
              {{ key }}
              <span class="arrow"
                :class="
                sortOrders[key] > 0
                ? 'asc'
                : 'dsc'">
              </span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="
          entry in data
          | filterBy filterKey in columns
          | orderBy sortKey sortOrders[sortKey]"
            transition="table-row">
          <td v-for="key in columns">
            {{entry[key]}}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    data: Array,
    columns: Array,
    filterKey: String,
  },
  data(){
    const sortOrders = {}
    this.columns.forEach(key => {
      sortOrders[key] = 1;
    })
    return {
      sortKey: this.columns[0],
      sortOrders,
    }
  },
  methods: {
    sortBy(key) {
      this.sortKey= key;
      this.sortOrders[key] = -1 * this.sortOrders[key]
    }
  }
}
</script>

<style>
  body {
    font-size: 14px;
    color: #444;
  }

  #search-form {
    margin-bottom: 1rem;
  }

  table {
    border: 2px solid #42b983;
    border-radius: 3px;
    background-color: #fff;
  }
  thead {
    background-color: rgb(66,185,131);
  }
  tbody {
    background-color: #f5f5f5;
  }
  th,td {
    min-width: 10rem;
    padding: 0.5rem 1rem;
  }
  th {
    color: #eee;
    cursor: pointer;
    user-select: none;
  }
  th.active {
    color: #fff;
  }
  .arrow {
    display: inline-block;
    vertical-align: middle;
    width: 0;
    height: 0;
    margin-left: 5px;
    opacity: 0.66;
  }

  .arrow.asc {
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-bottom: 4px solid #fff;
  }

  .arrow.dsc {
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid #fff;
  }
  th.active .arrow {
    opacity: 1;
  }
  .table-row-enter, .table-row-leave {
    transition: all 0.3s ease;
    opacity: 0;
  }
</style>
