<template>
  <div class="new-post">
    <md-list>
      <md-list-item>
        <md-avatar class="md-avatar-icon">
          <md-icon>folder</md-icon>
        </md-avatar>
        <div class="md-list-text-container">
          <md-input-container>
            <label>Add Comment</label>
            <md-input v-model="comment.content" placeholder=""></md-input>
          </md-input-container>
        </div>
      </md-list-item>
    </md-list>
    <router-link :to="{ name: 'Group.show', params: {cid: this.$route.params.cid, gid: this.$route.params.gid}}" >
      <md-button class="md-button md-raised md-primary" >
        <span>Back</span>
        <md-ink-ripple />
      </md-button>
    </router-link>
    <md-button class="md-button md-raised md-primary" @click.native="createComment">
      <span>Save</span>
      <md-ink-ripple />
    </md-button>
  </div>
</template>

<script>

import CommentsApi from '../../api/comments.js'
import router from '../../router'

export default {
  name: 'new-comment',
  data () {
    return {
      comment: {
        content: ''
      }
    }
  },
  props: {
    post: {
      type: Object,
      required: false,
      default: {}
    }
  },
  methods: {
    createComment () {
      console.log(this.group)
      var cId = this.$route.params.cid
      var postId = this.post.id
      var content = this.comment.content
      this.comment.content = ''
      var gId = this.$route.params.gid
      CommentsApi.createComment(cId, gId, postId, content,
        function (_comment) {
          console.log(_comment)
          router.push({ name: 'Post.show', params: { cid: cId, gid: gId, pid: postId }, query: { t: new Date() } })
        }
      )
    }
  }
}
</script>

<style scoped>
  .md-list-item {
    padding-left: 80px;
  }
</style>
