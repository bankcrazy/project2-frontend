<template>
  <div id="app">
    <div v-if="$store.getters.loggedIn">    
      <sk-left-navigation></sk-left-navigation>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
    SkLeftNavigation: require('./components/LeftNavigation.vue')
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
