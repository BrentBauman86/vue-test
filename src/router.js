import Vue from 'vue';
import Router from 'vue-router';
import Skills from '@/components/Skills';
import Login from '@/components/Login';
import Signup from '@/components/Signup'
import firebase from 'firebase'

Vue.use(Router);

const router = new Router({
    routes: [
     

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
        },
    
        {
        path: '/',
        name: 'skills',
        component: Skills,
        meta: {
          requiresAuth: true
        }
      }
    ]
});

router.beforeEach((to, from, next) => {
    const currentUser = firebase.auth().currentUser;
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

    if (requiresAuth && !currentUser) next('login');
    else if (!requiresAuth && currentUser) next('/');
    else next();
});

export default router;
