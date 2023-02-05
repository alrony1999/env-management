<script setup>
import { ref } from 'vue';
const showMobileMenu = ref(false)
</script>
<template>
    <nav>
        <!--desktop menu-->
        <div class="bg-indigo-600">
            <div class="max-w-7xl mx-auto ">
                <div class="flex justify-between">
                    <!--menu-->
                    <div class="flex space-x-4 ">
                        <!--logo-->
                        <router-link :to="{ name: 'home' }" class="flex items-center py-5 px-2 space-x-2 "><svg
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-8 h-8 text-indigo-200">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
                            </svg><span class="text-2xl font-extrabold text-white">Navbar</span></router-link>

                        <!--menu-->
                        <div class="hidden md:flex items-center space-x-1">
                            <router-link to=""
                                class="px-5 py-2 text-indigo-200 hover:text-indigo-400">Student</router-link>
                            <router-link to=""
                                class="px-5 py-2 text-indigo-200 hover:text-indigo-400">Module</router-link>
                            <router-link to=""
                                class="px-5 py-2 text-indigo-200 hover:text-indigo-400">Store</router-link>

                        </div>
                    </div>

                    <!--login-->
                    <div class="hidden md:flex items-center space-x-1 ">
                        <a href="" class="px-5 py-2 text-indigo-200 hover:text-indigo-400">Login</a>
                        <a href="" class="px-5 py-2 text-indigo-200 hover:text-indigo-400">Register</a>
                    </div>

                    <!--button show mobile menu-->
                    <div class="md:hidden flex items-center ">
                        <button @click="showMobileMenu = !showMobileMenu" class="py-5 px-2"><svg
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-8 h-8 text-indigo-200">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!--mobile menu-->
        <div class="md:hidden bg-indigo-600" v-if="showMobileMenu">
            <a href="" class="block py-2 px-10 hover:bg-indigo-700 hover:text-indigo-400 text-indigo-100">Student</a>
            <a href="" class="block py-2 px-10 hover:bg-indigo-700 hover:text-indigo-400 text-indigo-100">About</a>
            <a href="" class="block py-2 px-10 hover:bg-indigo-700 hover:text-indigo-400 text-indigo-100">Store</a>
        </div>
    </nav>

</template>

<style scoped>

</style>
