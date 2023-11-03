<template>

  <div id="app"  v-if="this.token">
    <Header subtitle="Objava novog filma"/>

    <b-form @submit="onSubmit">

      <b-form-group label="Film:" label-for="mov_title">
        <b-form-input id="mov_title" v-model="form.mov_title" type="text" placeholder="Unesite naslov filma" min="1" required></b-form-input>
      </b-form-group>

      <b-form-group label="Jezik:" label-for="mov_lang">
        <b-form-input id="mov_lang" v-model="form.mov_lang" type="text" placeholder="Unesite jezik" min="0" required></b-form-input>
      </b-form-group>

      <b-form-group label="Godina:" label-for="mov_year">
        <b-form-input id="mov_year" v-model="form.mov_year" type="number" placeholder="Unesite godinu izdavanja" required></b-form-input>
      </b-form-group>

      <b-form-group label="Vreme trajanja filma:" label-for="mov_time">
        <b-form-input id="mov_time" v-model="form.mov_time" type="number" placeholder="Unesite vreme trajanja filma" max="300" required></b-form-input>
      </b-form-group>

      <b-form-group label="Zemlja:" label-for="mov_rel_country">
        <b-form-input id="mov_rel_country" v-model="form.mov_rel_country" type="text" placeholder="Unesite zemlju" required></b-form-input>
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
  name: 'PostMovie',
  components: {
    Header
  },
  data() {
    return {
      form: {
        mov_title: '',
        mov_lang: '',
        mov_year: '',
        mov_time: '',
        mov_rel_country: ''
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
      'postMovie',
    ]),
    onSubmit(e) {
      e.preventDefault();
      this.postMovie(this.form);
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