<template>

  <div>
    <Header :subtitle="subtitle"/>
    <SingleGenre v-if="genre" :genre="genre"/>
  </div>

</template>

<script>
  import {mapActions, mapState} from "vuex";
  import Header from '@/components/Header.vue';
  import SingleGenre from "@/components/SingleGenre.vue";
  export default {
    name: 'SingleGenreView',
    components: {
      Header,
      SingleGenre
    },
    data() {
      return {
        subtitle: 'Zanr'
      }
    },
    computed: {
      ...mapState([
        'genre'
      ])
    },
    
    methods: {
      ...mapActions([
        'fetchGenreById'
      ])
    },
    mounted() {
      this.fetchGenreById(this.$route.params.id);
    }
  }
</script>

<style scoped>
</style>