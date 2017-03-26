<template>
  <div class="">
    <h1>Create New Group</h1>
    <form novalidate @submit.stop.prevent="submit">
      <md-input-container>
        <label>Group Name</label>
        <md-textarea v-model="group.name"></md-textarea>
      </md-input-container>
      <md-input-container>
        <label>Group Description</label>
        <md-textarea v-model="group.description"></md-textarea>
      </md-input-container>
    </form>
    <router-link :to="{ name: 'Home.index' }" >
      <md-button class="md-button md-raised md-primary" >
        <span>Back</span>
        <md-ink-ripple />
      </md-button>
    </router-link>
    <md-button class="md-button md-raised md-primary" @click.native="createGroup">
      <span>Confirm</span>
      <md-ink-ripple />
    </md-button>
  </div>
</template>

<script>
import GroupsApi from '../../api/groups.js'
import router from '../../router'

export default {
  name: 'createGroup',
  data () {
    return {
      group: {
        name: '',
        description: ''
      }
    }
  },
  methods: {
    createGroup () {
      var cId = this.$route.params.cid
      console.log('innew')
      console.log(cId)
      GroupsApi.createGroup(cId, this.group,
        function (_group) {
          router.push({ name: 'Group.index', params: { cid: cId }, query: { t: new Date() } })
        }
      )
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
