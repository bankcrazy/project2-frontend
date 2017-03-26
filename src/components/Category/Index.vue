<template>
  <div class="cats">
    <h2>Categories</h2>
    <md-list class="custom-list md-triple-line" v-for="cat in cats">
      <router-link :to="{ name: 'Group.index', params: {cid: cat.id } }">
        <iccs340-cat :cat='cat'></iccs340-cat>
      </router-link>
    </md-list>
  </div>
</template>

<script>
import CatsApi from '../../api/cats.js'

export default {
  name: 'cats',
  components: {
    Iccs340Cat: require('./Cat')
  },
  data () {
    return {
      cat: {},
      cats: null,
      error: null
    }
  },
  beforeRouteEnter (to, from, _next) {
    CatsApi.getCats(_cats => {
      _next(vm => {
        vm.cats = _cats
      })
    })
  },
  watch: {
    $route () {
      CatsApi.getCats(_cats => {
        this.cats = _cats
      })
    }
  }
}
</script>

<style scoped>
  .cats {
    padding: 0 10px;
  }
</style>
