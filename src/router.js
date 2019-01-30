import Vue from 'vue';
import Router from 'vue-router';
import Skills from './components/Skills.vue';
import About from './components/About.vue';
import Login from './components/Login.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
        path: '/',
        name: 'skills',
        component: Skills 
        },
        {
        path: '/about/:name',
        name: 'about',
        component: About
        },
        { 
        path: '/login',
        name: 'login',
        component: Login 
        }
    ]
})