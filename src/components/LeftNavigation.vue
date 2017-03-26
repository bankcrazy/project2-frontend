<template lang="html">
  <div class="left-navigation">
    <md-toolbar>
      <md-button class="md-icon-button" @click.native="toggleLeftSidenav">
        <md-icon>menu</md-icon>
      </md-button>
    </md-toolbar>
    <md-sidenav class="md-left" ref="leftSidenav" @open="open('Left')" @close="close('Left')">
      <md-toolbar class="md-large">
        <div class="md-toolbar-container">
          <h3 class="md-title">RoiTip-Webboard</h3>
        </div>
      </md-toolbar>
      <md-list>
        <md-list-item>
          <router-link :to="{ name: 'Home.index' }">
            <span>Home</span>
          </router-link>
        </md-list-item>

        <md-button class="md-button md-raised md-primary" @click.native="logout">
          <span>Log out</span>
          <md-ink-ripple />
        </md-button>


      </md-list>
    </md-sidenav>
  </div>
</template>

<script>
import UsersApi from '../api/users.js'

export default {
  name: 'left-navigation',
  methods: {
    toggleLeftSidenav () {
      this.$refs.leftSidenav.toggle()
    },
    open (ref) {
      console.log('Opened: ' + ref)
    },
    close (ref) {
      console.log('Closed: ' + ref)
    },
    logout () {
      UsersApi.logout(function (_response) {
        // NOTE: Posts.index is not yet implemented
      })
    }
  }

}
</script>

<style>
</style>
