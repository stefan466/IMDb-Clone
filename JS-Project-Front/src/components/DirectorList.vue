<template>

 <div>
    <b-pagination
      v-model="currentPage"
      :total-rows="directors.length"
      :per-page="perPage"
      aria-controls="image-table"
    ></b-pagination>

    <b-table
      id="image-table"
      hover
      fixed
      :items="directors"
      :fields="fields"
      small
      :per-page="perPage"
      :current-page="currentPage"
      @row-clicked="rowClicked"
    >
    </b-table>
    <b-pagination
      v-model="currentPage"
      :total-rows="directors.length"
      :per-page="perPage"
      aria-controls="image-table"
    ></b-pagination>
  </div>

</template>

<script>
  import { mapState } from 'vuex';
  export default {
    name: "DirectorList",
    data() {
      return {
        fields: ['first_name', 'last_name'],
        items: [],
        currentPage: 1,
        perPage: 10
      }
    },
    mounted() {
    },
    computed: {
      ...mapState([
        'directors'
      ])
    },
    methods: {
      rowClicked(record, index) {
        this.$router.push({ name: 'SingleDirector', params: { id: record.id} });
      }
    }
  }
</script>

<style scoped>
  .pagination {
    justify-content: center;
  }
  
</style>