<script lang="ts" setup>
import { ref } from 'vue';
import { useAddNewEnvFile } from '../../composables/addNewEnv.ts';
import { useEnvStore } from '../../stores/env.ts';
const store = useEnvStore();
const emit = defineEmits(['submit'])

const envForm = ref<{ name?: string, body?: string }>({})

function submitForm() {
    if (envForm.value.name != '') {
        useAddNewEnvFile(envForm.value)
        emit('submit')
    }

}
</script>
<template>
    <form @submit.prevent="submitForm" class="bg-white  px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="envname">
                Env Name
            </label>
            <input v-model="envForm.name"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="envname" type="text" placeholder="Env Name">
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                Write Your Env File
            </label>
            <textarea v-model="envForm.body"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="env-textarea" rows="10" cols="50"></textarea>
        </div>
        <button type="submit" class="px-5 py-2 bg-purple-900 border rounded text-black">Add</button>
    </form>
</template>
<style scoped>

</style>
