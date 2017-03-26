<template>
  <div class="hello">
    <h1>RoiTip-Webboard</h1>
    <h2>Login</h2>
    <form novalidate @submit.stop.prevent="submit">
      <md-input-container>
        <label>E-mail</label>
        <md-input v-model="user.email"></md-input>
      </md-input-container>
      <md-input-container md-has-password>
        <label>Password</label>
        <md-input v-model="user.password" type="password"></md-input>
      </md-input-container>
    </form>
    <router-link :to="{ name: 'Register.index' }" >
      <md-button class="md-button md-raised md-primary" >
        <span>register</span>
        <md-ink-ripple />
      </md-button>
    </router-link>
    <md-button class="md-button md-raised md-primary" @click.native="login">
      <span>login</span>
      <md-ink-ripple />
    </md-button>


  </div>
</template>

<script>
import UsersApi from '../../api/users.js'
export default {
  name: 'login',
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      console.log('methods.login')
      console.log(this.user.email, this.user.password)
      UsersApi.login(this.user.email, this.user.password, function (_response) {
        // NOTE: Posts.index is not yet implemented
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style land="css">
</style>
