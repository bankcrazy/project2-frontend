// http://localhost:3000/group.json

import Vue from 'vue'
import store from '../store'
export default {
  getGroups (cid, callback, errCallback) {
    Vue.$http.get(`/categories/${cid}/group.json`)
    .then(function (response) {
      callback(response.data)
    })
    .catch(function (response) {
      store.dispatch('logout')
    })
  },
  getGroup (cid, gid, callback, errCallback) {
    // Formatted string in JS is wrapped by ` not '
    Vue.$http.get(`/categories/${cid}/group/${gid}.json`)
    .then(function (response) {
      callback(response.data)
    })
    .catch(function (response) {
      errCallback(response)
    })
  },
  createGroup (cid, params, callback, errCallback) {
    console.log('creating')
    console.log(cid)
    Vue.$http.post(`/categories/${cid}/group.json`, params)
    .then(function (response) {
      callback(response.data)
    })
    .catch(function (response) {
      console.log(response)
      errCallback(response)
    })
  }
}
