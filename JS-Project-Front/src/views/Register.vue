<template>

  <div id="app">
    <Header subtitle="Registracija"/>

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

</template>

<script>
  import Header from '@/components/Header.vue';
  import { mapActions } from 'vuex';
  export default {
    name: 'Register',
    
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
          admin: "false"
        }
      }
    },
    methods: {
      ...mapActions([
        'register'
      ]),
      onSubmit(e) {
        e.preventDefault();
        this.register(this.form);
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