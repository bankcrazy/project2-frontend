<template>
  <div class="cat">
    <md-list-item>
      <md-avatar>
        <md-icon>label</md-icon>
      </md-avatar>

      <div class="md-list-text-container">
        <span>{{ cat.title }}</span>
      </div>

      <md-button class="md-icon-button md-list-action">
        <md-icon class="md-primary">code</md-icon>
      </md-button>

      <md-divider class="md-inset"></md-divider>
    </md-list-item>
  </div>
</template>

<script>

export default {
  name: 'cat',
  props: {
    cat: {
      type: Object,
      required: false,
      default: {}
    }
  }
}
</script>

<style scoped>

</style>
