import { createRouter, createWebHashHistory } from 'vue-router'
import Quotes from '../components/Quotes.vue'

const routes = [
    {
        path: '/',
        name: 'quotes',
        component: Quotes
    },
]




const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
