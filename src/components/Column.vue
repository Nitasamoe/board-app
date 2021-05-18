<template>
    <div class="column p-2 m-2 border-solid border-2">
        {{ columnData.name }}
        <div v-for="taskData of columnData.tasks" :key="taskData.uuid">
            <Task
                :assigne="taskData.userAssigned"
                :title="taskData.name"
                :description="taskData.description"
                :id="taskData.id"
            />
        </div>
        <input
            type="text"
            class="block p-2 w-full bg-trasnparent"
            placeholder="+ Enter new Task"
            @keyup.enter="createTask($event, columnData.tasks)"
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
    methods: {
        createTask(e, tasks) {
            this.$store.commit('CREATE_TASK', {
                tasks,
                name: e.target.value,
            })
            e.target.value = ''
        },
    },
}
</script>

<style scoped>
.column {
    width: 500px;
}
</style>
