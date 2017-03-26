<template>
  <div class="">
    <h1>Register</h1>
    <h3> - password must be at least 6 character long </h3>
    <form novalidate @submit.stop.prevent="submit">
      <md-input-container>
        <label>E-mail</label>
        <md-textarea required v-model="user.email"></md-textarea>
      </md-input-container>
      <md-input-container md-has-password>
        <label>Password</label>
        <md-input required v-model="user.password" type="password"></md-input>
      </md-input-container>

    </form>
    <router-link :to="{ name: 'Login.index' }" >
      <md-button class="md-button md-raised md-primary" >
        <span>Back</span>
        <md-ink-ripple />
      </md-button>
    </router-link>
    <md-button class="md-button md-raised md-primary" @click.native="register">
      <span>Confirm</span>
      <md-ink-ripple />
    </md-button>
  </div>
</template>

<script>
import UsersApi from '../../api/users.js'

export default {
  name: 'register',
  data () {
    return {
      user: {
        email: '',
        password: ''
        // confirmation: ''
      }
    }
  },
  methods: {
    register () {
      // console.log('imhere')
      console.log(this.user.email, this.user.password)
      UsersApi.register(this.user.email, this.user.password, function (_response) {
        console.log('register complete and login')
      })
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
