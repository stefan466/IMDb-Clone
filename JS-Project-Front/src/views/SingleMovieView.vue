<template>

  <div>
    <Header :subtitle="subtitle"/>
    <SingleMovie v-if="movie" :movie="movie"/>
  </div>

</template>

<script>
  import {mapActions, mapState} from "vuex";
  import Header from '@/components/Header.vue';
  import SingleMovie from "@/components/SingleMovie.vue";
  export default {
    name: 'SingleMovieView',
    components: {
      Header,
      SingleMovie
    },
    data() {
      return {
        subtitle: 'Film'
      }
    },
    computed: {
      ...mapState([
        'movie'
      ])
    },
    
    methods: {
      ...mapActions([
        'fetchMovieById'
      ])
    },
    mounted() {
      this.fetchMovieById(this.$route.params.id);
    }
  }
</script>

<style scoped>
</style>