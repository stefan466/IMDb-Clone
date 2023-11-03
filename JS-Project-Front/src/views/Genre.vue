<template>

  <div id="app">
    <Header :subtitle="subtitle"/>
    <genre-list />
  </div>

</template>

<script>
  import Header from '@/components/Header.vue';
  import GenreList from '@/components/GenreList.vue';
  import { mapActions } from 'vuex';
  export default {
    name: 'Genre',
    
    components: {
      Header,
      GenreList
    },
    data() {
        return {
            subtitle: 'Zanr',
        }
    },
    mounted() {
        this.fetchGenres();
    },
    methods: {
      ...mapActions([
        'fetchGenres'
      ])
    }
  }
</script>

<style scoped>
</style>