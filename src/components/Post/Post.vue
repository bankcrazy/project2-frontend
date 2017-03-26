<template>
  <div class="post">
    <md-list-item>
      <md-avatar>
        <md-icon>bookmark</md-icon>
      </md-avatar>
      <div class="md-list-text-container">
        <span>{{ post.user.email }}</span>
        <span>{{ post.name }}</span>
        <span>{{ post.content }}</span>
      </div>
    </md-list-item>
  </div>
</template>

<script>
export default {
  name: 'post',
  props: {
    post: {
      type: Object,
      required: false,
      default: {}
    }
  }

}
</script>

<style scoped>
  .md-list-item {
    padding-left: 40px;
  }
</style>
