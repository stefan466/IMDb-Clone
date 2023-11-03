<template>

    <div id="app"  v-if="this.token">
        <Header :subtitle="subtitle"/>
        <RevieweList />
    </div>
    <p v-else>Nemate pravo na ovaj unos.</p>
  

</template>

<script>
  import Header from '@/components/Header.vue';
  import RevieweList from '@/components/ReviewerList.vue';
  import { mapActions, mapState } from 'vuex';
  export default {
    name: 'Reviewer',
    
    components: {
      Header,
      RevieweList
    },
    computed: {
    ...mapState([
      'token',
      'loggedUserId'
    ]),
  },
    data() {
        return {
            subtitle: 'Korisnici',
        }
    },
    mounted() {
        this.fetchReviewers();
    },
    methods: {
      ...mapActions([
        'fetchReviewers'
      ])
    }
  }
</script>

<style scoped>
</style>