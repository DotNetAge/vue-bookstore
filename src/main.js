import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'

import Home from './components/home.vue'
import Category from './components/category.vue'
import ShoppingCart from './components/shoppingcart.vue'
import Me from './components/me.vue'
import BookDetail from "./books/detail.vue"

Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    linkActiveClass: "active",
    routes: [
        {path: '/home', component: Home},
        {path: '/categories', component: Category},
        {path: '/shopping-cart', component: ShoppingCart},
        {path: '/me', component: Me},
        {path: '/books/:id', component: BookDetail, name: 'book_detail'}
    ]
})

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
