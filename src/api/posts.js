import Vue from 'vue'
export default {
  getPosts (cid, gid, callback, errCallback) {
    console.log(gid)
    Vue.$http.get(`/categories/${cid}/group/${gid}/posts.json`)
    .then(function (response) {
      callback(response.data)
    })
    .catch(function (response) {
      errCallback(response)
    })
  },
  getPost (cid, gid, pid, callback, errCallback) {
    // Formatted string in JS is wrapped by ` not '
    Vue.$http.get(`/categories/${cid}/group/${gid}/posts/${pid}.json`)
    .then(function (response) {
      callback(response.data)
    })
    .catch(function (response) {
      errCallback(response)
    })
  },
  createPost (cid, gid, postName, postContent, callback, errCallback) {
    var postParams = {
      post: {
        name: postName,
        content: postContent
      }
    }

    Vue.$http.post(`/categories/${cid}/group/${gid}/posts.json`, postParams)
    .then(function (response) {
      callback(response.data)
    })
    .catch(function (response) {
      errCallback(response)
    })
  }
}
