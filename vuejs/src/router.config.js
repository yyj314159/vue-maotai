import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import home from './components/home.vue';
import login from './components/login.vue';
import contactUs from './components/contactUs.vue';
import shopping from './components/shopping.vue';
import err from './components/404.vue';

const routes = [
    {path:'/home',component:home},
    {path:'/login',component:login},
    {path:'/contactUs',component:contactUs},
    {path:'/shopping',component:shopping},
    {path:'/',redirect: '/home'},
    {path:'*',component:err}
];

export default new VueRouter({
    routes
})
