<template>

  <div>
    <Header :subtitle="subtitle"/>
    <SingleReviewer v-if="reviewer" :reviewer="reviewer"/>
  </div>

</template>

<script>
  import {mapActions, mapState} from "vuex";
  import Header from '@/components/Header.vue';
  import SingleReviewer from "@/components/SingleReviewer.vue";
  export default {
    name: 'SingleReviewerView',
    components: {
      Header,
      SingleReviewer
    },
    data() {
      return {
        subtitle: 'Korisnik'
      }
    },
    computed: {
      ...mapState([
        'reviewer'
      ])
    },
    
    methods: {
      ...mapActions([
        'fetchReviewerById'
      ])
    },
    mounted() {
      this.fetchReviewerById(this.$route.params.id);
    }
  }
</script>

<style scoped>
</style>