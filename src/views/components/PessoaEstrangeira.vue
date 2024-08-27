<script setup>
import { ref } from 'vue';
import FileDoc from './FileDoc.vue';

const dropdownItems = ref([
    { name: 'Agente de carga', code: 'Agente de carga' },
    { name: 'Armador', code: 'Armador' },
    { name: 'Beneficiário', code: 'Beneficiário' },
    { name: 'Consignatário', code: 'Consignatário' },
    { name: 'Despachante', code: 'Despachante' },
    { name: 'Novo usuário', code: 'Novo usuário' },
    { name: 'Transportadora', code: 'Transportadora' },
]);

const dropdownItem = ref(null);
</script>

<template>
    <Fluid>
        <div class="flex flex-col md:flex-row gap-12">
            <div class="md:w-1/2">
                <div class="card flex flex-col gap-8">
                    <div class="font-semibold text-xl">Cadastro de Pessoa Estrangeira</div>
                    <div class="flex flex-col gap-2">
                        <label for="name1">Razão Social</label>
                        <InputText id="name1" type="text" />
                    </div>
                    <div class="flex flex-col gap-2">
                        <label for="email1">Identificador Estrangeiro</label>
                        <InputText id="email1" type="text" />
                    </div>
                    <div class="flex flex-col gap-2">
                        <label for="age1">Nome Fantasia</label>
                        <InputText id="age1" type="text" />
                    </div>
                    <div class="flex flex-wrap gap-2 w-full">
                        <label for="state">Perfil</label>
                        <Select id="state" v-model="dropdownItem" :options="dropdownItems" optionLabel="name" placeholder="Selecione um perfil" class="w-full"></Select>
                    </div>
                    <FileDoc />
                    <Button label="Enviar" :fluid="false"></Button>
                </div>
            </div>
        </div>
    </Fluid>
</template>