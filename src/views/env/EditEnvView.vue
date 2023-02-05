<script lang="ts" setup>
import { useRoute } from "vue-router";
import { useEnvStore } from '@/stores/env';
import type { Env } from '@/types.Env';
import type { Data } from '@/types.Data';
import { ref, unref, onBeforeMount, isRef } from 'vue';



const route = useRoute();
const store = useEnvStore();

const envEditForm = ref<Env>({});

onBeforeMount(() => {
    const id = Number(route.params.id)
    envEditForm.value = store.getEnv(id);
})

function addNewKey() {
    const newObj: Data = {};
    envEditForm.value.data = [...envEditForm.value.data, newObj]
}

function submit() {
    store.updateEnv(envEditForm.value);
}

function deleteKey(id: number) {
    envEditForm.value.data = [...envEditForm.value.data.filter((item: Data, index: number) => index != id)]
}


</script>

<template>
    <div class=" flex w-full flex-col justify-center">
        <form @submit.prevent="submit" class="bg-white  px-8 pt-6  ">
            <div class="mb-4  ml-64">
                <label class="block text-gray-700 text-sm font-bold mb-2 ml-32" for="envname">
                    Env Name
                </label>
                <input v-model="envEditForm.name"
                    class=" inline-block w-1/2 shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="envname" type="text" placeholder="Env Name">
            </div>

            <div v-for="(item, index) in envEditForm.data " :key="index" class="space-x-4 mb-4 flex items-center">
                <span>#{{ index+ 1 }}</span>
                <input v-model="item.key"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="envname" type="text" placeholder="Key Name">
                <input v-model="item.value"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="envname" type="text" placeholder="Key Value">
                <span @click="deleteKey(index)" :title="item.key"
                    class="bg-red-500 px-5 py-2 border rounded mx-2 cursor-pointer ">Delete</span>
            </div>




            <button type="submit" class="px-5 ml-72 py-2 bg-orange-500 border rounded text-black">Update</button>

        </form>

    </div>
    <button @click="addNewKey" id="add-new-row" class="px-2 py-2 text-right bg-orange-500 border rounded text-black">Add
        New
        Key</button>

    <div class=" flex w-full flex-col justify-center">
        <form @submit.prevent="submit" class="bg-white  px-8 pt-6  ">
            <div class="mb-4  ml-64">
                <label class="block text-gray-700 text-sm font-bold mb-2 ml-32" for="envname">
                    Env Name
                </label>
                <input v-model="envEditForm.name"
                    class=" inline-block w-1/2 shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="envname" type="text" placeholder="Env Name">
            </div>

            <div v-for="(item, index) in store.env[0].data" :key="index" class="space-x-4 mb-4 flex items-center">
                <span>#{{ index+ 1 }}</span>
                <input v-model="item.key"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="envname" type="text" placeholder="Key Name">
                <input v-model="item.value"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="envname" type="text" placeholder="Key Value">
                <span @click="deleteKey(index)" :title="item.key"
                    class="bg-red-500 px-5 py-2 border rounded mx-2 cursor-pointer ">Delete</span>
            </div>




            <button type="submit" class="px-5 ml-72 py-2 bg-orange-500 border rounded text-black">Update</button>

        </form>

    </div>
    <button @click="addNewKey" id="add-new-row" class="px-2 py-2 text-right bg-orange-500 border rounded text-black">Add
        New
        Key</button>
</template>

<style scoped>
#add-new-row {
    position: fixed;
    bottom: 5%;
    right: 1%
}
</style>
