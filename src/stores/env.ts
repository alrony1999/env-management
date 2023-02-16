import { ref, shallowRef, computed, reactive } from "vue";
import { defineStore } from "pinia";
import type { Env } from "@/types/Env";

// export const useEnvStore = defineStore(
//   "env",
//   () => {
//     const env = shallowRef<Env[]>([]);

//     const getEnv = computed(() => {
//       return (id: number) => env.value.find((item: Env) => item.id === id);
//     });

//     const addEnv = (object: Env) => {
//       env.value.push(object);
//     };

//     const updateEnv = (object: Env) => {
//       const index = env.value.findIndex((item: Env) => item.id === object.id);

//       console.log("old", env.value[index]); ///old
//       env.value[index] = object;
//       console.log("new", object); //new
//     };

//     return { env, updateEnv, getEnv, addEnv };
//   },
//   {
//     persist: true,
//   }
// );
export type EnvType = {
  env: Env[];
};
export const useEnvStore = defineStore("env", {
  state: () =>
    ({
      env: [],
    } as EnvType),
  getters: {
    getEnv(state) {
      return (id: number) => state.env.find((item: Env) => item.id === id);
    },
  },
  actions: {
    addEnv(object: Env) {
      this.env.push(object);
    },
    updateEnv(object: Env) {
      const index = this.env.findIndex((item: Env) => item.id === object.id);
      console.log("old", this.env[index]); ///old
      this.env[index] = object;
      console.log("new", this.env[index]); //new
    },
  },
  persist: true,
});
