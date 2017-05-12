import Vue from 'vue';
import VueLocalStorage from 'vue-localstorage';
import Router from 'vue-router';
import Vuetify from 'vuetify';
import NoteList from '@/components/NoteList';
import Note from '@/components/Note';
import CreateNote from '@/components/CreateNote';
import 'vuetify/dist/vuetify.min.css';

Vue.use(VueLocalStorage);
Vue.use(Router);
Vue.use(Vuetify);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'NoteList',
      component: NoteList,
    },
    {
      path: '/view/:id',
      name: 'View Note',
      component: Note,
      props: true,
    },
    {
      path: '/new',
      name: 'Create Note',
      component: CreateNote,
    },
    {
      path: '/edit/:id',
      name: 'Edit Note',
      component: CreateNote,
      props: true,
    },
  ],
});
