import Vue from 'vue';
import Router from 'vue-router';
import Skills from './components/Skills.vue';
import About from './components/About.vue';
import Login from './components/Login.vue';
import Signup from './components/Signup.vue'
import { truncate } from 'fs';

Vue.use(Router);

export default new Router({
    routes: [
        {
        path: '/',
        name: 'skills',
        component: Skills,
        meta: {
            requireAuth: truncate
        }
        },

        {
        path: '/about/:name',
        name: 'about',
        component: About
        },

        {
        path: '*',
        redirect: '/login'
        },

        { 
        path: '/login',
        name: 'login',
        component: Login 
        },

        {
        path: '/sign-up',
        name: 'signup',
        component: Signup
        }
    ]
})