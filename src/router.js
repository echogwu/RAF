import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Blogs from './views/Blogs.vue';
import Podcasts from './views/Podcasts.vue';
import Cooking from './views/Cooking.vue';
import Miscellaneous from './views/Miscellaneous.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/blogs',
            name: 'blogs',
            component: Blogs
        },
        {
            path: '/podcasts',
            name: 'podcasts',
            component: Podcasts
        },
        {
            path: '/cooking',
            name: 'cooking',
            component: Cooking
        },
        {
            path: '/miscellaneous',
            name: 'miscellaneous',
            component: Miscellaneous
        }
    ]
});
