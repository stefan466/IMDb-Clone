<template>

  <div>
    <Header :subtitle="subtitle"/>
    <SingleActor v-if="actor" :actor="actor"/>
  </div>

</template>

<script>
  import {mapActions, mapState} from "vuex";
  import Header from '@/components/Header.vue';
  import SingleActor from "@/components/SingleActor.vue";
  export default {
    name: 'SingleActorView',
    components: {
      Header,
      SingleActor
    },
    data() {
      return {
        subtitle: 'Glumac'
      }
    },
    computed: {
      ...mapState([
        'actor'
      ])
    },
    
    methods: {
      ...mapActions([
        'fetchActorById'
      ])
    },
    mounted() {
      this.fetchActorById(this.$route.params.id);
    }
  }
</script>

<style scoped>
</style>