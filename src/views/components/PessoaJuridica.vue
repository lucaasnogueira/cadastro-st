<script setup>
import { ref } from 'vue';
import FileDoc from './FileDoc.vue';
import { useRouter } from 'vue-router'; 
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
const cnpj = ref('');
const errorMessage = ref('');
const errorMessageProfile = ref('');
const errorMessageFile = ref('');

const validateCNPJ = () => {
    if (cnpj.value.length !== 14) {
        errorMessage.value = 'CNPJ inválido';
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

const validateFile = () => {
    if (!file.value) {
        errorMessageFile.value = 'Você deve anexar um documento';
    } else {
        errorMessageFile.value = '';
    }
};

const handleSubmit = () => {
    validateCNPJ();
    validateProfile();
    validateFile();
    if (!errorMessage.value && !errorMessageProfile.value && !errorMessageFile.value) {
        router.push('/'); 
    }
};
</script>

<template>
    <Fluid>
        <div class="flex flex-col md:flex-row gap-12">
            <div class="md:w-1/2">
                <div class="card flex flex-col gap-8">
                    <div class="font-semibold text-xl">Cadastro de Pessoa Jurídica</div>
                    <div class="flex flex-col gap-2">
                        <label for="cnpj">CNPJ</label>
                        <InputText
                            id="cnpj"
                            type="text"
                            v-model="cnpj"
                            @blur="validateCNPJ"
                        />
                        <span v-if="errorMessage" style="color: red;">{{ errorMessage }}</span>
                    </div>
                    <div class="flex flex-col gap-2">
                        <label for="email1">Razão Social</label>
                        <InputText id="email1" type="text" />
                    </div>
                    <div class="flex flex-col gap-2">
                        <label for="age1">Nome Fantasia</label>
                        <InputText id="age1" type="text" />
                    </div>
                    <div class="flex flex-wrap gap-2 w-full">
                        <label for="state">Perfil</label>
                        <Select
                            id="state"
                            v-model="dropdownItem"
                            :options="dropdownItems"
                            optionLabel="name"
                            placeholder="Selecione um perfil"
                            class="w-full"
                        ></Select>
                        <span v-if="errorMessageProfile" style="color: red;">{{ errorMessageProfile }}</span>
                    </div>
                    <FileDoc />
                    <Button
                        label="Enviar"
                        :fluid="false"
                        @click="handleSubmit"
                    ></Button>
                </div>
            </div>
        </div>
    </Fluid>
</template>
