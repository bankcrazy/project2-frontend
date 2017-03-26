import Vue from 'vue'
export default {
  getCats (callback, errCallback) {
    Vue.$http.get('/categories.json')
    .then(function (response) {
      callback(response.data)
    })
    .catch(function (response) {
      errCallback(response)
    })
  }
}
