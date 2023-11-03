<template>

 <div>
    <b-pagination
      v-model="currentPage"
      :total-rows="movies.length"
      :per-page="perPage"
      aria-controls="image-table"
    ></b-pagination>

    <b-table
      id="image-table"
      hover
      fixed
      :items="movies"
      :fields="fields"
      small
      :per-page="perPage"
      :current-page="currentPage"
      @row-clicked="rowClicked"
    >
    </b-table>
    <b-pagination
      v-model="currentPage"
      :total-rows="movies.length"
      :per-page="perPage"
      aria-controls="image-table"
    ></b-pagination>
  </div>

</template>

<script>
  import { mapState } from 'vuex';
  export default {
    name: "MovieList",
    data() {
      return {
        fields: ['mov_title', 'mov_lang', 'mov_year', 'mov_time', 'mov_rel_country'],
        items: [],
        currentPage: 1,
        perPage: 10
      }
    },
    mounted() {
    },
    computed: {
      ...mapState([
        'movies'
      ])
    },
    methods: {
      rowClicked(record, index) {
        this.$router.push({ name: 'SingleMovie', params: { id: record.id} });
      }
    }
  }
</script>

<style scoped>
  .pagination {
    justify-content: center;
  }
  
</style>