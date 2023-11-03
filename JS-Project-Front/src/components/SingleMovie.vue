<template>

  <div class="d-flex justify-content-center">
    <div>
        <div class="art">
        <ul>
            <li>Naslov filma: {{ movie.name }}</li>
            <li>Jezik: {{ movie.mov_lang }}</li>
            <li>Godina: {{ movie.mov_year }}</li>
            <li>Trajanje: {{ movie.mov_time }}</li>
            <li>Drzava: {{ movie.mov_rel_country }}</li>
        </ul>
        </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "SingleMovie",
  props: {
    movie: Object
  },
}
</script>

<style scoped>
  .art {
    border-bottom-style: solid;
    margin-bottom: 10px;
  }
</style>