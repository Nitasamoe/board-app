<template>
    {{ columnData.name }}
    <div v-for="taskData of columnData.tasks" :key="taskData.uuid">
        {{ taskData.name }}
    </div>
</template>

<script lang="ts">
//import { defineComponent } from 'vue'

export default {
    props: ['columnData'],
}
</script>
