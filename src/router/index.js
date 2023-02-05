import { createRouter, createWebHashHistory } from 'vue-router'
import store from '../store'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'


const routes = [
    {
        path: '/',
        name: 'login',
        component: Login
    },
    {
        path: '/home',
        name: 'home',
        component: Home
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'login',
        component: Login
    },

]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})


router.beforeEach((to, from, next) => {
    if (to.name !== 'login' && !store.state.token) next({ name: 'login' })
    else next()
})


export default router
