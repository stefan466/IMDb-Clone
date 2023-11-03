<template>

  <div class="d-flex justify-content-center">
    <div>
        <div class="art">
        <ul>
            <li>Ime: {{ actor.first_name }}</li>
            <li>Prezime: {{ actor.last_name }}</li>
            <li>Pol: {{ tournament.gender }}</li>
        </ul>
        <button v-on:click="accessActors()">Glumci</button>
        </div>
    </div>
  </div>

</template>

<script>
import { mapState } from "vuex";

export default {
  name: "SingleActor",

  props: {
    actor: Object
  },

  methods: {
    accessActors(){
      this.$router.push({ name: 'ResultList', params: { id: this.tournament.id} });
    }
  },

  computed: {
    ...mapState([
      'organiser',
      'tournaments',
    ]),
  }
}

</script>

<style scoped>

  .art {
    border-bottom-style: solid;
    margin-bottom: 10px;
  }

</style>