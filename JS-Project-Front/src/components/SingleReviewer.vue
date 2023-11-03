<template>

  <div class="d-flex justify-content-center">
    <div>
        <div class="art">
        <ul>
            <li>Ime: {{ reviewer.first_name }}</li>
            <li>Prezime: {{ reviewer.last_name }}</li>
            <li>Username: {{ reviewer.username }}</li>
            
        </ul>
        </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "Singlereviewer",
  props: {
    reviewer: Object
  },
}
</script>

<style scoped>
  .art {
    border-bottom-style: solid;
    margin-bottom: 10px;
  }
</style>