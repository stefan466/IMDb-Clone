<template>
  <div id="app">

    <div>
      <b-navbar toggleable="sm" type="dark" variant="info">
        <b-navbar-brand to="/">Movie Database</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/">Home page</b-nav-item>
            <b-nav-item to="/postmovies">Post Movie</b-nav-item>
            <b-nav-item to="/updateuser">Update User</b-nav-item>
            <b-nav-item-dropdown text="Section">
              <b-dropdown-item to="/movies">Filmovi</b-dropdown-item>
              <b-dropdown-item to="/actors">Glumci</b-dropdown-item>
              <b-dropdown-item to="/ratings">Ocene</b-dropdown-item>
              <b-dropdown-item to="/directors">Reziseri</b-dropdown-item>
              <b-dropdown-item to="/genres">Zanrovi</b-dropdown-item>
              <b-dropdown-item to="/reviewers">Korisnici</b-dropdown-item>



            </b-nav-item-dropdown>
          </b-navbar-nav>

          <b-navbar-nav class="ml-auto">
            <b-nav-item v-if="!token" to="/register">Registracija</b-nav-item>
            <b-nav-item v-if="!token" to="/login">Prijava</b-nav-item>
            <b-nav-item v-else @click="logout()">Odjava</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

    <router-view class="stranica" />
  </div>
</template>

<script>

  import { mapState, mapMutations } from 'vuex';

  export default {
    name: 'App',

    data() {
      return {
        searchQuery: ''
      }
    },

    computed: {
      ...mapState([
        'token',
        'loggedUserId'
      ])
    },

    mounted() {
      if (localStorage.token) {
        this.setToken(localStorage.token);
      }
      if(localStorage.loggedUserId){
        this.setLoggedUserId(localStorage.loggedUserId);
      }
    },

    methods: {
      ...mapMutations([
        'setToken',
        'removeToken',
        'setLoggedUserId'
      ]),

      search(e) {
        e.preventDefault();
      },

      logout() {
        this.removeToken();
        this.$router.push({ name: 'Login' });
      }
    },
  }

</script>

<style>

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    padding-bottom: 10px;
  }

  .stranica {
    width: 80%;
    margin-left: 10%;
  }
  
</style>
