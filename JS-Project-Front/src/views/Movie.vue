<template>

  <div id="app">
    <Header :subtitle="subtitle"/>
    <MovieList />
  </div>

</template>

<script>
  import Header from '@/components/Header.vue';
  import MovieList from '@/components/MovieList.vue';
  import { mapActions } from 'vuex';
  export default {
    name: 'Movie',
    
    components: {
      Header,
      MovieList
    },
    data() {
        return {
            subtitle: 'Filmovi',
        }
    },
    mounted() {
        this.fetchMovies();
    },
    methods: {
      ...mapActions([
        'fetchMovies'
      ])
    }
  }
</script>

<style scoped>
</style>