// import './assets/main.css'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import { createApp } from 'vue'
import {createRouter,createWebHistory} from "vue-router";
import App from './App.vue'
import Home from '@/pages/Home.vue';
import Menu from '@/pages/Menu.vue';

const routes = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/menus",
        component: Menu
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

createApp(App).use(router).mount("#app");

