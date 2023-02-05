import { ref, computed, reactive } from "vue";
import { defineStore } from "pinia";
import type { Env } from "@/types/Env";

export const useEnvStore = defineStore(
  "env",
  () => {
    const env = ref<Env[]>([]);

    const updateEnv = (object: Env) => {
      env.value.forEach((item: Env, index: number) => {
        if (item.id == object.id) {
          console.log("old", env.value[index]); ///old
          env.value[index] = object;
          console.log("new", object); //new
        }
      });
    };
    return { env, updateEnv };
  },
  {
    persist: true,
  }
);
// export type EnvType = {
//   env: Env[];
// };
// export const useEnvStore = defineStore("env", {
//   state: () =>
//     ({
//       env: [],
//     } as EnvType),
//   actions: {
//     updateEnv(object: Env) {
//       this.env.forEach((item: Env, index: number) => {
//         if (item.id == object.id) {
//           console.log("old", this.env[index]); ///old
//           //this.env[index] = object;
//           console.log("new", object); //new
//         }
//       });
//     },
//   },
//   persist: true,
// });
