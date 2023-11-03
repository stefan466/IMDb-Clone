<template>

 <div>
    <b-pagination
      v-model="currentPage"
      :total-rows="actors.length"
      :per-page="perPage"
      aria-controls="image-table"
    ></b-pagination>

    <b-table
      id="image-table"
      hover
      fixed
      :items="actors"
      :fields="fields"
      small
      :per-page="perPage"
      :current-page="currentPage"
      @row-clicked="rowClicked"
    >
    </b-table>
    <b-pagination
      v-model="currentPage"
      :total-rows="actors.length"
      :per-page="perPage"
      aria-controls="image-table"
    ></b-pagination>
  </div>

</template>

<script>

  import { mapActions, mapState } from 'vuex';

  export default {
    name: "ActorList",

    data() {
      return {
        fields: ['first_name', 'last_name', 'gender'],
        items: [],
        currentPage: 1,
        perPage: 10
      }
    },

    mounted() {

    },

    computed: {
      ...mapState([
        'actors'
      ])
    },

    methods: {
    /*...mapActions([
        'fetchResults'
      ]),*/

      rowClicked(record, index) {
        this.$router.push({ name: 'SingleActor', params: { id: record.id} });
      }
    }
  }

</script>

<style scoped>

  .pagination {
    justify-content: center;
  }
  
</style>