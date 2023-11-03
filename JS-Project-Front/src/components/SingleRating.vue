<template>

  <div class="d-flex justify-content-center">
    <div>
        <div class="art">
        <ul>
            <li>ID: {{ rating.id }}</li>
            <li>Trnmt ID: {{ rating.rev_stars }}</li>
            <li>Participantov broj: {{ rating.num_of_ratings }}</li>
            
        </ul>
        </div>
        <b-button v-on:click="accessRatingModification()">Modifikacija ocne</b-button>
    </div>
  </div>

</template>

<script>
import { mapState } from "vuex";

export default {
  name: "SingleRating",

  props: {
    rating: Object
  },

  computed: {
    ...mapState([
      'loggedUserId'
    ])
  },

  methods: {
    accessResultModification(){
      if(this.loggedUserId == this.result.userId){
        this.$router.push({ name: 'UpdateResult', params: { id: this.result.id, tournamentId: this.result.tournamentId} });
      } else {
        alert("Rezultat možete modifikovati samo ako ste ulogovani, i rezultat je vaš.")
      }
    }
  }
}

</script>

<style scoped>

  .art {
    border-bottom-style: solid;
    margin-bottom: 10px;
  }

</style>