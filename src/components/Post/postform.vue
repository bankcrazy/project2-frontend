<template>
  <div class="new-group">
    <md-list>
      <md-list-item>
        <md-avatar class="md-avatar-icon">
          <md-icon>folder</md-icon>
        </md-avatar>
        <div class="md-list-text-container">
          Add Post
          <md-input-container>
            <label>Post name</label>
            <md-input v-model="post.name" placeholder=""></md-input>
          </md-input-container>
          <md-input-container>
            <label>Post content</label>
            <md-input v-model="post.content" placeholder=""></md-input>
          </md-input-container>
        </div>
      </md-list-item>
    </md-list>
    <router-link :to="{ name: 'Group.index', params: {cid: this.$route.params.cid} }" >
      <md-button class="md-button md-raised md-primary" >
        <span>Back</span>
        <md-ink-ripple />
      </md-button>
    </router-link>
    <md-button class="md-button md-raised md-primary" @click.native="createPost">
      <span>Save</span>
      <md-ink-ripple />
    </md-button>
  </div>
</template>

<script>
import PostsApi from '../../api/posts.js'
import router from '../../router'

export default {
  name: 'new-post',
  data () {
    return {
      post: {
        name: '',
        content: ''
      }
    }
  },
  props: {
    group: {
      type: Object,
      required: false,
      default: {}
    }
  },
  methods: {
    createPost () {
      console.log('group.id', this.group.id, this.$route.params.cid)
      var cId = this.$route.params.cid
      var groupId = this.group.id
      var name = this.post.name
      var content = this.post.content
      this.post.content = ''
      PostsApi.createPost(cId, groupId, name, content,
        function (_post) {
          console.log(_post)
          router.push({ name: 'Group.show', params: { cid: cId, gid: groupId }, query: { t: new Date() } })
        }
      )
    }
  }
}
</script>

<style scoped>
.md-list-item {
  padding-left: 40px;
}
</style>
