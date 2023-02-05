import { ref } from "vue";
export function useTextAreaData(file) {
  let textArea = ref("");
  file.forEach((item) => {
    let temp = item.key + "=" + item.value + "\n";
    textArea.value += temp;
  });
  return { textArea };
}
