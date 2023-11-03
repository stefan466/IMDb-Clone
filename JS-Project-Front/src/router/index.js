import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '@/views/Login.vue';
import Register from '@/views/Register.vue';
import Movie from '@/views/Movie.vue';
import Rating from '@/views/Rating.vue';
import Actor from '@/views/Actor.vue';
import Director from '@/views/Director.vue';
import Genre from '@/views/Genre.vue';
import SingleMovieView from '@/views/SingleMovieView.vue';
import SingleActorView from "@/views/SingleActorView.vue";
import SingleRatingView from "@/views/SingleRatingView.vue";
import SingleGenreView from "@/views/SingleGenreView.vue";
import SingleDirectorView from "@/views/SingleDirectorView.vue";
import PostMovie from "@/views/PostMovie.vue";
import UpdateReviewer from "@/views/UpdateReviewer";
import Reviewer from "@/views/Reviewer";
import SingleReviewerView from "@/views/SingleReviewerView";

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/register',
    name: 'Register',
    component: Register
  },

  {
    path: '/login',
    name: 'Login',
    component: Login
  },

  {
    path: '/movies',
    name: 'Movie',
    component: Movie
  },

  {
    path: '/movie/:id',
    name: 'SingleMovie',
    component: SingleMovieView
  },

  {
    path: '/actors',
    name: 'Actor',
    component: Actor
  },

  {
    path: '/actor/:id',
    name: 'SingleActor',
    component: SingleActorView
  },

  {
    path: '/ratings',
    name: 'RatingList',
    component: Rating
  },

  {
    path: '/rating/:id',
    name: 'SingleRating',
    component: SingleRatingView
  },

  {
    path: '/directors',
    name: 'Director',
    component: Director
  },

  {
    path: '/director/:id',
    name: 'SingleDirector',
    component: SingleDirectorView
  },
  {
    path: '/genres',
    name: 'Genre',
    component: Genre
  },

  {
    path: '/genre/:id',
    name: 'SingleGenre',
    component: SingleGenreView
  },

  {
    path: '/postmovies',
    name: 'PostMovie',
    component: PostMovie
  },
  {
    path:'/updateuser',
    name:'UpdateReviewer',
    component:UpdateReviewer
  },
  {
    path: '/reviewers',
    name: 'Reviewer',
    component: Reviewer
  },

  {
    path: '/reviewer/:id',
    name: 'SingleReviewer',
    component: SingleReviewerView
  },



  

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router