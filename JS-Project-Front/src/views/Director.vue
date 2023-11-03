<template>

  <div id="app">
    <Header :subtitle="subtitle"/>
    <DirectorList />
  </div>

</template>

<script>
  import Header from '@/components/Header.vue';
  import DirectorList from '@/components/DirectorList.vue';
  import { mapActions } from 'vuex';
  export default {
    name: 'Director',
    
    components: {
      Header,
      DirectorList
    },
    data() {
        return {
            subtitle: 'Reziseri',
        }
    },
    mounted() {
        this.fetchDirectors();
    },
    methods: {
      ...mapActions([
        'fetchDirectors'
      ])
    }
  }
</script>

<style scoped>
</style>