import Vue from 'vue'
import store from '../store'

export default {
  login (email, password, callback) {
    var loginParams = {
      'user': {
        'email': email,
        'password': password
      }
    }
    Vue.$http.post('/users/api_sign_in.json', loginParams)
    .then(function (response) {
      store.dispatch('login')
      callback(response.data)
    })
    .catch(function (response) {
      store.dispatch('logout')
    })
  },
  register (email, password, callback) {
    var params = {
      'user': {
        'email': email,
        'password': password
      }
    }
    Vue.$http.post('/users/register.json', params)
    .then(function (response) {
      Vue.$http.post('/users/api_sign_in.json', params)
      .then(function (response) {
        store.dispatch('login')
        callback(response.data)
      })
      .catch(function (response) {
      })
    })
    .catch(function (response) {
    })
  },
  logout (callback) {
    console.log(store)
    Vue.$http.delete('/users/api_sign_out.json')
    .then(function (response) {
      store.dispatch('logout')
      callback(response.data)
    })
    .catch(function (response) {
      store.dispatch('logout')
    })
  },
  checkLoggedIn () {
    Vue.$http.get('/users/check_signed_in.json')
    .then(function (response) {
      store.dispatch('login')
    })
    .catch(function (response) {
      store.dispatch('logout')
    })
  }
}
