import Vue from 'vue';
import Router from 'vue-router';
import Tasks from '@/components/Tasks';
import Login from '@/components/Login';
import View from '@/components/View';
import Signup from '@/components/Signup'
import firebase from 'firebase'

Vue.use(Router);

const router = new Router({
    routes: [
     
    { path: '*', 
    redirect: '/login' },

    { path: '/login', 
    name: 'login', 
    component: Login },

    { path: '/sign-up', 
    name: 'signup', 
    component: Signup },

    { path: '/view',
    name: 'view',
    component: View },

    { path: '/',
    name: 'tasks',
    component: Tasks,meta: {
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
