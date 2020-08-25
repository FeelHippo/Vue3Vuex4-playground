import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';
import Detail from '../components/detail-section.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/:id',
        name: 'Detail',
        component: Detail
    }
];

export const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})
