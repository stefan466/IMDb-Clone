<template>

  <div class="d-flex justify-content-center">
    <div>
        <div class="art">
        <ul>
            <li>Zanr filma: {{ genre.genre_title }}</li>
        </ul>
        </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "SingleGenre",
  props: {
    genre: Object
  },
}
</script>

<style scoped>
  .art {
    border-bottom-style: solid;
    margin-bottom: 10px;
  }
</style>