<template>

  <div>
    <Header :subtitle="subtitle"/>
    <SingleRating v-if="rating" :rating="rating"/>
  </div>

</template>

<script>
  import {mapActions, mapState} from "vuex";
  import Header from '@/components/Header.vue';
  import SingleRating from "@/components/SingleRating.vue";
  export default {
    name: 'SingleMovieView',
    components: {
      Header,
      SingleRating
    },
    data() {
      return {
        subtitle: 'Ocena'
      }
    },
    computed: {
      ...mapState([
        'rating'
      ])
    },
    
    methods: {
      ...mapActions([
        'fetchRatingById'
      ])
    },
    mounted() {
      this.fetchRatingById(this.$route.params.id);
    }
  }
</script>

<style scoped>
</style>