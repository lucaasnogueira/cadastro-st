<script setup>
import { ref } from 'vue';

import AppMenuItem from './AppMenuItem.vue';

const model = ref([
    {
        label: 'Home',
        items: [{ label: 'Home', icon: 'pi pi-fw pi-home', to: '/' }]
    },
    {
        label: 'Cadastro',
        items: [
            {   label: 'Tipos de pessoa',
                icon: 'pi pi-fw pi-id-card',
                items: [
                            { label: 'Pessoa Estrangeira', icon: 'pi pi-fw pi-user', to: '/components/pessoaestrangeira'},
                            { label: 'Pessoa Física', icon: 'pi pi-fw pi-user', to: '/components/pessoafisica'},
                            { label: 'Pessoa Jurídica', icon: 'pi pi-fw pi-user', to: '/components/pessoajuridica' }
                        ]
            },
        ]
    },
]);
</script>

<template>
    <ul class="layout-menu">
        <template v-for="(item, i) in model" :key="item">
            <app-menu-item v-if="!item.separator" :item="item" :index="i"></app-menu-item>
            <li v-if="item.separator" class="menu-separator"></li>
        </template>
    </ul>
</template>

<style lang="scss" scoped></style>
