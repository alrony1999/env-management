import { ref } from "vue";
import { useEnvStore } from "@/stores/env.ts";
import type { Env } from "@/types/Env.ts";
import type { Data } from "@/types/Data.ts";

export function useAddNewEnvFile(file: { name?: string; body?: string }) {
  const store = useEnvStore();
  const envObject = ref<Env>({});
  const data: Data[] = [];

  envObject.id = store.env.length + 1;

  envObject.name = file.name;

  const env_file_body = file.body;

  const env_array = env_file_body.split(/[\r\n]+/);

  env_array.map((item) => {
    const s: Data = {};

    if (!item.startsWith("#") && item != "") {
      const temp = item.split("=");

      s.key = temp[0];
      s.value = "";

      if (typeof temp[1] != "undefined") {
        if (temp[1].startsWith('"') || temp[1].startsWith("'")) {
          temp[1] = temp[1].substring(1, temp[1].length - 1);
        }

        if (temp[1].endsWith('"') || temp[1].endsWith("'")) {
          temp[1] = temp[1].substring(0, temp[1].length - 2);
        }

        s.value = temp[1];
      }
      data.push(s);
    }
  });

  envObject.data = data;

  store.addEnv(envObject);
}
