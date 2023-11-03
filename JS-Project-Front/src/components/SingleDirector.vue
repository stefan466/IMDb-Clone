<template>

  <div class="d-flex justify-content-center">
    <div>
        <div class="art">
        <ul>
            <li>Ime reditelja: {{ director.first_name }}</li>
            <li>Prezime reditelja: {{ director.last_name }}</li>

        </ul>
        </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "SingleDirector",
  props: {
    director: Object
  },
}
</script>

<style scoped>
  .art {
    border-bottom-style: solid;
    margin-bottom: 10px;
  }
</style>