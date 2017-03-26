import Vue from 'vue'

export default {
  getComments (cid, gid, postId, callback, errCallback) {
    Vue.$http.get(`/categories/${cid}/group/${gid}/posts/${postId}/comments.json`)
    .then(function (response) {
      callback(response.data)
    })
    .catch(function (response) {
      console.log(response)
    })
  },
  createComment (cid, gid, postId, content, callback, errCallback) {
    var commentParams = { comment: { content: content } }
    Vue.$http.post(`/categories/${cid}/group/${gid}/posts/${postId}/comments.json`, commentParams)
    .then(function (response) {
      callback(response.data)
    })
    .catch(function (response) {
      console.log(response)
    })
  }
}
