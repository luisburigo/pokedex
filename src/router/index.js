import Vue from 'vue'
import VueRouter from 'vue-router'
import Pokedex from "@/views/Pokedex.vue";
import Pokemon from "@/views/Pokemon.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Pokedex',
        component: Pokedex,
    },
    {
        path: '/:num',
        name: 'Pokemon',
        component: Pokemon,
    }
];

const router = new VueRouter({
    routes
})

export default router
