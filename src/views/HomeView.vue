<script lang="ts" setup>
import { ref } from 'vue';
import Modal from '@/components/modal/Modal.vue';
import AddEnvForm from "@/views/env/AddEnvForm.vue";
import { useEnvStore } from '@/stores/env'
import type { Env } from '@/types/Env';

const store = useEnvStore();
let showAddEnvModal = ref(false)

function submitFormHandler() {
  showAddEnvModal.value = false
  console.log('Submit Form')
}

function envFileDelete(id: number) {
  if (confirm("Are You Sure?")) {
    store.env = store.env.filter((item: Env) => item.id != id)
  }

}


</script>

<template>
  <div v-if="store.env.length">
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              Id
            </th>
            <th scope="col" class="px-6 py-3">
              Name
            </th>

            <th scope="col" class="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>

          <tr v-for="item in store.env" :key="item.id" class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">

            <td class="px-6 py-4">
              {{ item.id }}
            </td>
            <td class="px-6 py-4">
              {{ item.name }}
            </td>

            <td class="spacex-5 px-6 py-4">
              <RouterLink :to="{ name: 'env-branch', params: { id: item.id } }"
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Show All Branch</RouterLink>
              <RouterLink :to="{ name: 'edit-env', params: { id: item.id } }"
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline m-5">Edit</RouterLink>
              <span @click="envFileDelete(item.id)" class="m-5 text-red-500 cursor-pointer">Delete</span>
            </td>
          </tr>

        </tbody>
      </table>
    </div>

  </div>

  <div>
    <button @click="showAddEnvModal = true" class="px-5 py-2 bg-orange-600 border rounded text-black">Add New Env
      File</button>
  </div>
  <Modal :visible="showAddEnvModal" @close="showAddEnvModal = false">
    <AddEnvForm @submit="submitFormHandler" />
  </Modal>

</template>
