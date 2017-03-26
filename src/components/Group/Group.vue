<template>
  <div class="group">
    <md-list-item>
      <md-avatar>
        <md-icon>announcement</md-icon>
      </md-avatar>

      <div class="md-list-text-container">
        <span>{{ group.name }}</span>
        <p>{{ group.description }}</p>
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
  name: 'group',
  props: {
    group: {
      type: Object,
      required: false,
      default: {}
    }
  }
}
</script>

<style scoped>

</style>
