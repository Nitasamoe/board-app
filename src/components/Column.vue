<template>
    {{ columnData.name }}
    <div v-for="taskData of columnData.tasks" :key="taskData.uuid">
        <Task
            :assigne="taskData.userAssigned"
            :title="taskData.name"
            :description="taskData.description"
        />
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
