import AppLayout from '@/layout/AppLayout.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: AppLayout,
            children: [
                {
                    path: '/',
                    name: 'dashboard',
                    component: () => import('@/views/Dashboard.vue')
                },
                {
                    path: '/components/pessoafisica',
                    name: 'pessoafisica',
                    component: () => import('@/views/components/PessoaFisica.vue')
                },
                {
                    path: '/components/pessoajuridica',
                    name: 'pessoajuridica',
                    component: () => import('@/views/components/PessoaJuridica.vue')
                },
                {
                    path: '/components/pessoaestrangeira',
                    name: 'pessoaestrangeira',
                    component: () => import('@/views/components/PessoaEstrangeira.vue')
                },
                
                {
                    path: '/components/file',
                    name: 'file',
                    component: () => import('@/views/components/FileDoc.vue')
                },
                
            ]
        },
    ]
});

export default router;
