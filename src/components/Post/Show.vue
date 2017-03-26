<template>
  <div class="post">
    <md-list class="md-triple-line">
      <iccs340-group :group='group'></iccs340-group>
    </md-list>
    <md-list class="md-triple-line">
      <iccs340-post :post='post'></iccs340-post>
    </md-list>
    <md-list v-for="comment in comments">
      <iccs340-comment :comment='comment'></iccs340-comment>
    </md-list>
    <iccs340-new-comment :post='post'></iccs340-new-comment>
  </div>
</template>

<script>
import PostsApi from '../../api/posts.js'
import CommentsApi from '../../api/comments.js'
import GroupsApi from '../../api/groups.js'

export default {
  name: 'post',
  components: {
    Iccs340Group: require('../Group/Group'),
    Iccs340Post: require('./Post'),
    Iccs340Comment: require('../Comment/Comment'),
    Iccs340NewComment: require('../Comment/New')
  },
  data () {
    return {
      group: {},
      post: {},
      comments: [],
      error: null
    }
  },
  created () {
    // fetch the data when the view is created and the data is
    // already being observed
    this.fetchData()
  },
  watch: {
    // call again the method if the route changes
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      console.log(this.$route.params.gid)
      GroupsApi.getGroup(this.$route.params.cid, this.$route.params.gid, _group => {
        this.group = _group
        PostsApi.getPost(this.$route.params.cid, this.$route.params.gid, this.$route.params.pid, _post => {
          this.post = _post
          CommentsApi.getComments(this.$route.params.cid, this.$route.params.gid, _post.id, _comments => {
            this.comments = _comments
          })
        })
      })
    }
  }
}
</script>

<style scoped>

</style>
