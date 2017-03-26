<template>
  <div class="group">
    <md-list class="md-triple-line">
      <iccs340-group :group='group'></iccs340-group>
    </md-list>
    <md-list v-for="post in posts">
      <router-link :to="{ name: 'Post.show', params: {cid: cId, gid: group.id, pid: post.id } }">
        <iccs340-post :post='post'></iccs340-post>
      </router-link>
    </md-list>
    <iccs340-new-post :group='group'></iccs340-new-post>
  </div>
</template>

<script>
import GroupsApi from '../../api/groups.js'
import PostsApi from '../../api/posts.js'

export default {
  name: 'group',
  components: {
    Iccs340Group: require('./Group'),
    Iccs340Post: require('../Post/Post'),
    Iccs340NewPost: require('../Post/Postform')
  },
  data () {
    return {
      cId: '',
      group: {},
      posts: [],
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
      this.cId = this.$route.params.cid
      GroupsApi.getGroup(this.$route.params.cid, this.$route.params.gid, _group => {
        this.group = _group
        PostsApi.getPosts(this.$route.params.cid, _group.id, _posts => {
          this.posts = _posts
        })
      })
    }
  }
}
</script>

<style scoped>
</style>
