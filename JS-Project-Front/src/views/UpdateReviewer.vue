<template>

  <div id="app"  v-if="this.token">
    <Header subtitle="Izmena korisničkih parametara"/>

    <b-form @submit="onSubmit">

      <b-form-group label="Ime:" label-for="first_name">
        <b-form-input id="first_name" v-model="form.first_name" type="text" placeholder="Unesite ime" required></b-form-input>
      </b-form-group>

      <b-form-group label="Prezime:" label-for="last_name">
        <b-form-input id="last_name" v-model="form.last_name" type="text" placeholder="Unesite prezime" required></b-form-input>
      </b-form-group>

      <b-form-group label="Korisničko ime:" label-for="username">
        <b-form-input id="username" v-model="form.username" placeholder="Unesite korisničko ime" min="6" max="20" required></b-form-input>
      </b-form-group>

      <b-form-group label="Lozinka:" label-for="password">
        <b-form-input id="password" v-model="form.password" type="password" placeholder="Unesite lozinku" min="6" max="20" required></b-form-input>
      </b-form-group>

      <br>
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>

  <p v-else>Nemate pravo na ovu izmenu.</p>
  
</template>

<script>
import Header from '@/components/Header.vue';
import {mapActions, mapState} from "vuex";
export default {
  name: 'UpdateReviewer',
  components: {
    Header
  },
  data() {
    return {
      form: {
        first_name: '',
        last_name: '',
        username: '',
        password: '',
        admin: "false",
      }
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
      'updateUser',
    ]),
    onSubmit(e) {
      e.preventDefault();
      this.form.id = this.loggedUserId;
      this.updateUser(this.form);
      this.$router.push({ name: 'Home' });
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