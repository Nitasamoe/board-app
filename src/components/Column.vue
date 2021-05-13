<template>
    <div class="column p-2 m-2 border-solid border-2">
        {{ columnData.name }}
        <div v-for="taskData of columnData.tasks" :key="taskData.uuid">
            <Task
                :assigne="taskData.userAssigned"
                :title="taskData.name"
                :description="taskData.description"
            />
        </div>
    </div>
</template>

<script lang="ts">
import Task from './Task.vue'

export default {
    props: ['columnData'],
    components: {
        Task,
    },
}
</script>

<style scoped>
.column {
    width: 500px;
}
</style>
