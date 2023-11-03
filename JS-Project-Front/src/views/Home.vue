<template>

  <div id="app">
    <Header subtitle="Welcome!"/>
  </div>

</template>

<script>
  import Header from '@/components/Header.vue'
  import {mapState} from "vuex";
  export default {
    name: 'Home',
    
    components: {
      Header
    },
    ...mapState([
      'token',
      'loggedUserId'
    ])
  }
</script>