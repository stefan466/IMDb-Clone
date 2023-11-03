<template>

  <div id="app">
    <Header :subtitle="subtitle"/>
    <ActorList />
  </div>

</template>

<script>
  import Header from '@/components/Header.vue';
  import ActorList from '@/components/ActorList.vue';
  import { mapActions } from 'vuex';
  export default {
    name: 'Actor',
    
    components: {
      Header,
      ActorList
    },
    data() {
        return {
            subtitle: 'Glumci',
        }
    },
    mounted() {
        this.fetchActors();
    },
    methods: {
      ...mapActions([
        'fetchActors'
      ])
    }
  }
</script>

<style scoped>
</style>