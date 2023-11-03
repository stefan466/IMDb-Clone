<template>

  <div id="app"  v-if="this.token">
    <Header subtitle="Objava novog filma"/>

    <b-form @submit="onSubmit">

      <b-form-group label="Ime glumca:" label-for="first_name">
        <b-form-input id="first_name" v-model="form.first_name" type="text" placeholder="Unesite ime glumca" required></b-form-input>
      </b-form-group>

      <b-form-group label="Prezime glumca:" label-for="last_name">
        <b-form-input id="last_name" v-model="form.last_name" type="text" placeholder="Unesite prezime glumca"  required></b-form-input>
      </b-form-group>

      <b-form-group label="Pol:" label-for="gender">
        <b-form-input id="gender" v-model="form.gender" type="text" placeholder="Unesite pol glumca" required></b-form-input>
      </b-form-group>


      <br>
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>

  </div>
  <p v-else>Nemate pravo na ovaj unos.</p>
  
</template>

<script>
import Header from '@/components/Header.vue';
import {mapActions, mapState} from "vuex";
export default {
  name: 'PostActor',
  components: {
    Header
  },
  data() {
    return {
      form: {
        first_name: '',
        last_name: '',
        gender: '',
      },
    }
  },
  computed: {
    ...mapState([
      'token',
      'loggedUserId'
    ]),
  },
  methods: {
    ...mapActions([
      'postActors',
    ]),
    onSubmit(e) {
      e.preventDefault();
      this.postResult(this.form);
      this.$router.back();
    }
  }
}
</script>

<style scoped>
  input:invalid {
    border: 2px solid red;
  }
  
  input:valid {
    border: 2px solid green;
  }
</style>