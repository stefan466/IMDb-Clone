<template>

  <div id="app">
    <Header :subtitle="subtitle"/>
    <RatingList />
  </div>

</template>

<script>
  import Header from '@/components/Header.vue';
  import RatingList from '@/components/RatingList.vue';
  import { mapActions } from 'vuex';
  export default {
    name: 'Rating',
    
    components: {
      Header,
      RatingList
    },
    data() {
        return {
            subtitle: 'Ocene',
        }
    },
    mounted() {
        this.fetchRatings();
    },
    methods: {
      ...mapActions([
        'fetchRatings'
      ])
    }
  }
</script>

<style scoped>
</style>