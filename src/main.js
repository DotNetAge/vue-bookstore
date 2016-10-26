import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'

//import Home from './components/home.vue'
import Category from './components/category.vue'
import ShoppingCart from './components/shoppingcart.vue'
import Me from './components/me.vue'
import BookDetail from "./books/detail.vue"

const Home = resolve => require(['./components/home.vue'], resolve)


Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    linkActiveClass: "active",
    routes: [
        {name:'Home', path: '/', component: Home},
        {name:'Categories',path: '/categories', component: Category},
        {name:'ShoppingCart',path: '/shopping-cart', component: ShoppingCart},
        {name:'Me',path: '/me', component: Me},
        {name:'BookDetail',path: '/books/:id', component: BookDetail}
    ]
})

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
