<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import FileDoc from './FileDoc.vue';

const router = useRouter(); 

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
const cpf = ref('');
const errorMessage = ref('');
const errorMessageProfile = ref(''); 

const validateCPF = () => {
    if (cpf.value.length !== 11) {
        errorMessage.value = 'CPF inválido';
    } else {
        errorMessage.value = '';
    }
};

const validateProfile = () => {
    if (!dropdownItem.value) {
        errorMessageProfile.value = 'Selecione um perfil para a empresa';
    } else {
        errorMessageProfile.value = '';
    }
};

const handleSubmit = () => {
    validateCPF();
    validateProfile();
    if (!errorMessage.value && !errorMessageProfile.value) {
        router.push('/'); 
    }
};
</script>

<template>
    <Fluid>
        <div class="flex flex-col md:flex-row gap-12">
            <div class="md:w-1/2">
                <div class="card flex flex-col gap-8">
                    <div class="font-semibold text-xl">Cadastro de Pessoa Física</div>
                    <div class="flex flex-col gap-2">
                        <label for="name1">Nome</label>
                        <InputText id="name1" type="text" />
                    </div>
                    <div class="flex flex-col gap-2">
                        <label for="cpf">CPF</label>
                        <InputText id="cpf" type="text" v-model="cpf" @blur="validateCPF" />
                        <span v-if="errorMessage" style="color: red;">{{ errorMessage }}</span>
                    </div>
                    <div class="flex flex-col gap-2">
                        <label for="email1">Nome Fantasia</label>
                        <InputText id="email1" type="text" />
                    </div>
                    <div class="flex flex-wrap gap-2 w-full">
                        <label for="state">Perfil</label>
                        <Select id="state" v-model="dropdownItem" :options="dropdownItems" optionLabel="name" placeholder="Selecione um perfil" class="w-full"></Select>
                        <span v-if="errorMessageProfile" style="color: red;">{{ errorMessageProfile }}</span>
                    </div>
                    <FileDoc />
                    <Button label="Enviar" :fluid="false" @click="handleSubmit"></Button>
                </div>
            </div>
        </div>
    </Fluid>
</template>
