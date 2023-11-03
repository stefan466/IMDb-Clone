import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
    state: {
      token: '',
      loggedUserId: '',
      movie: null,
      movies: [],
      actor: null,
      actors: [],
      rating: null,
      ratings: [],
      genre: null,
      genres: [],
      director: null,
      directors: [],
      reviewers:[],
      reviewer:null
    },
  
    mutations: {
      setToken(state, token) {
        state.token = token;
        localStorage.token = token;
      },
  
      removeToken(state) {
        state.token = '';
        localStorage.token = '';
      },
  
      setLoggedUserId(state, userId){
        state.loggedUserId = userId;
        localStorage.loggedUserId = userId;
      },
  
      setMovies(state, movies) {
        state.movies = movies;
      },
  
      setMovieById(state, movie) {
        state.movie = movie;
      },
  
      setActors(state, actors) {
        state.actors = actors;
      },
  
      setActorById(state, actor) {
        state.actor = actor;
      },
  
      setRatings(state, ratings) {
        state.ratings = ratings;
      },

      setRatingById(state, rating) {
        state.rating = rating;
      },

      setDirectors(state, directors) {
        state.directors = directors;
      },

      setDirectorById(state, director) {
        state.director = director;
      },

      setGenres(state, genres) {
        state.genres = genres;
      },

      setGenreById(state, genre) {
        state.genre = genre;
      },
    
      setReviewers(state, reviewers) {
        state.reviewers = reviewers;
      },

      setReviewerById(state, reviewer) {
        state.reviewer = reviewer;
      }

  
     
    },
  
    actions: {
  
      register({ commit }, obj) {
        fetch('http://127.0.0.1:9400/auth_register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(obj)
        })
          .then( res => res.json() )
            .then( tkn => { 
              if (tkn.msg) {
                alert(tkn.msg);
              } else {
                commit('setToken', tkn.token)
              }
            });
      },
  
      login({ commit }, obj) {
        fetch('http://127.0.0.1:9400/auth_login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(obj)
        })
          .then( res => res.json() )
            .then( tkn => { 
              if (tkn.msg) {
                alert(tkn.msg);
              } else {
                commit('setToken', tkn.token)
                commit('setLoggedUserId', tkn.userId)
              }
            });
      },
  
      fetchMovies({ commit }){
        fetch('http://127.0.0.1:8800/admin/movies',{
          method: 'GET',
          headers: {
              'authorization': `Bearer ${localStorage.token}`
          },
      })
          .then( obj => obj.json() )
          .then( res => commit('setMovies', res));
      },
  
      fetchMovieById({ commit }, id){
        fetch('http://127.0.0.1:8800/admin/movies/' + id,{
          method: 'GET',
          headers: {
            'authorization': `Bearer ${localStorage.token}`
          },
        })
            .then( obj => obj.json() )
            .then( res => commit('setMovieById', res) );
      },
  
      fetchActors({ commit }){
        fetch('http://127.0.0.1:8800/admin/actors',{
          method: 'GET',
          headers: {
              'authorization': `Bearer ${localStorage.token}`
          },
      })
          .then( obj => obj.json() )
          .then( res => commit('setActors', res));
      },
  
      fetchActorById({ commit }, id){
        fetch('http://127.0.0.1:8800/admin/actors/' + id,{
          method: 'GET',
          headers: {
            'authorization': `Bearer ${localStorage.token}`
          },
        })
            .then( obj => obj.json() )
            .then( res => commit('setActorById', res) );
      },
  
      fetchRatings({ commit }){
        fetch('http://127.0.0.1:8800/admin/ratings',{
          method: 'GET',
          headers: {
            'authorization': `Bearer ${localStorage.token}`
          },
        })
            .then( obj => obj.json() )
            .then( res => commit('setRatings', res));
      },
  
      fetchRatingById({ commit }, id){
        fetch('http://127.0.0.1:8800/admin/ratings/' + id,{
          method: 'GET',
          headers: {
            'authorization': `Bearer ${localStorage.token}`
          },
        })
            .then( obj => obj.json() )
            .then( res => commit('setRatingById', res) );
      },


      fetchDirectors({ commit }){
        fetch('http://127.0.0.1:8800/admin/directors',{
          method: 'GET',
          headers: {
            'authorization': `Bearer ${localStorage.token}`
          },
        })
            .then( obj => obj.json() )
            .then( res => commit('setDirectors', res));
      },
  
      fetchDirectorById({ commit }, id){
        fetch('http://127.0.0.1:8800/admin/directors/' + id,{
          method: 'GET',
          headers: {
            'authorization': `Bearer ${localStorage.token}`
          },
        })
            .then( obj => obj.json() )
            .then( res => commit('setDirectorById', res) );
      },


      fetchGenres({ commit }){
        fetch('http://127.0.0.1:8800/admin/genres',{
          method: 'GET',
          headers: {
            'authorization': `Bearer ${localStorage.token}`
          },
        })
            .then( obj => obj.json() )
            .then( res => commit('setGenres', res));
      },


      fetchGenreById({ commit }, id){
        fetch('http://127.0.0.1:8800/admin/genres/' + id,{
          method: 'GET',
          headers: {
            'authorization': `Bearer ${localStorage.token}`
          },
        })
            .then( obj => obj.json() )
            .then( res => commit('setGenreById', res) );
      },

      fetchReviewers({ commit }){
        fetch('http://127.0.0.1:8800/admin/reviewers',{
          method: 'GET',
          headers: {
            'authorization': `Bearer ${localStorage.token}`
          },
        })
            .then( obj => obj.json() )
            .then( res => commit('setReviewers', res));
      },


      fetchReviewerById({ commit }, id){
        fetch('http://127.0.0.1:8800/admin/reviewers/' + id,{
          method: 'GET',
          headers: {
            'authorization': `Bearer ${localStorage.token}`
          },
        })
            .then( obj => obj.json() )
            .then( res => commit('setReviewerById', res) );
      },

      postMovie({ commit }, obj){
        fetch('http://127.0.0.1:8800/admin/movies', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json' ,
            'authorization': `Bearer ${localStorage.token}`
          },
          body: JSON.stringify(obj)
        })
        .then( res => res.json() )
            .then( el => {
                if (el.msg) {
                alert(el.msg, 'Došlo je do greško kod dodavanja novog filma.');
              }
            });
      },
  
    
  
      updateUser({ commit }, obj){
        fetch('http://127.0.0.1:8800/admin/reviewers/' + obj.id, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json' ,
            'authorization': `Bearer ${localStorage.token}`
          },
          body: JSON.stringify(obj)
        }).then( res => res.json() )
            .then( el => {
              if (el.msg) {
                alert(el.msg, 'Došlo je do greško kod izmene korisničkih parametara.');
              }
            });
      },
  
    },
  
    modules: {
  
    }
  })
