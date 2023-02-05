<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
    visible: {
        type: Boolean,
        default: true
    },
    width: {
        type: String,
        default: "50%"
    }
})

const emit = defineEmits(['close'])
let localVisible = ref(props.visible)

watch(() => props.visible, (newValue) => {
    localVisible.value = newValue
})
watch(localVisible, (newValue) => {
    if (newValue == false) {
        emit('close');
    }

})
</script>
<template>
    <Teleport to="body">
        <el-dialog v-model="localVisible" :width="width">
            <slot></slot>
        </el-dialog>
    </Teleport>
</template>
<style scoped>

</style>