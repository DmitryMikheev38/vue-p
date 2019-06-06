<template>
<div>
  
  <my-header></my-header>
  
  <my-body>
  </my-body>
  <template v-if="error">
  <v-snackbar
    :multi-line="true" 
    :timeout="5000"
    color="error"
    :value="true"
    >
      {{ error }}
      <v-btn
        color="pink"
        flat darck
        @click="closeError"
      >
        Close
      </v-btn>
    </v-snackbar>
    </template>
    
</div>
</template>

<script>
import AdHeader from '@/components/header'
import AdBody from '@/components/bodyConteiner'

export default {
  name: 'App',
  components: {
    myBody: AdBody,
    myHeader: AdHeader,
  },
  data () {
    return {
      id: this.$route
    }
  },
  methods: {
    closeError () {
      this.$store.dispatch('clearError')
    }
  },
  computed: {
    loading () {
      return this.$store.getters.loading
    },
    error () {
      return this.$store.getters.error
    },
    user () {
      return this.$store.getters.user
    }
  },
  watch: {
    $route (toR, fromR) {
    this.id = toR.params
    }
  }
}
</script>

<style>

</style>

