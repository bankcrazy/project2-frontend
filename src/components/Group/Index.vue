<template>
  <div class="groups">
    <h2>Groups</h2>
    <md-list class="custom-list md-triple-line" v-for="group in groups">
      <router-link :to="{ name: 'Group.show', params: {cid: cId, gid: group.id } }">
        <iccs340-group :group='group'></iccs340-group>
      </router-link>
    </md-list>
    <iccs340-new-group :group='group'></iccs340-new-group>


  </div>
</template>

<script>
import GroupsApi from '../../api/groups.js'

export default {
  name: 'groups',
  components: {
    Iccs340Group: require('./Group'),
    Iccs340NewGroup: require('./NewGroup')

  },
  data () {
    return {
      cId: '',
      group: {},
      groups: null,
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
      GroupsApi.getGroups(this.$route.params.cid, _groups => {
        this.groups = _groups
      })
    }
  }
}
</script>

<style scoped>
  .groups {
    padding: 0 10px;
  }
</style>
