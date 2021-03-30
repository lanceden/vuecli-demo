import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import List from '../components/List'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        { path: '/Home', component: Home },
        { path: '/List', component: List },
    ]
})
