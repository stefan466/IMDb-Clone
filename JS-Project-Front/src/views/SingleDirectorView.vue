<template>

  <div>
    <Header :subtitle="subtitle"/>
    <SingleDirector v-if="director" :director="director"/>
  </div>

</template>

<script>
  import {mapActions, mapState} from "vuex";
  import Header from '@/components/Header.vue';
  import SingleDirector from "@/components/SingleDirector.vue";
  export default {
    name: 'SingleDirectorView',
    components: {
      Header,
      SingleDirector
    },
    data() {
      return {
        subtitle: 'Reziser'
      }
    },
    computed: {
      ...mapState([
        'director'
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