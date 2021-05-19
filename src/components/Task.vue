<template>
    <div
        @click="goToTask(id)"
        draggable="true"
        @dragstart="pickupTask($event, taskIndex, columnIndex)"
        @drop="moveTask($event, columnIndex)"
        @dragover.prevent
        @dragenter.prevent
        class="border-solid border-2 p-2 m-2"
    >
        <span class="font-semibold">{{ title }}</span>
        <p>{{ description }}</p>
    </div>
</template>

<script lang="ts">
import { mapState } from 'vuex'
export default {
    props: {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        id: {
            type: String,
            required: true,
        },
        assigne: {
            type: String,
        },
        taskIndex: {
            type: Number,
        },
        columnIndex: {
            type: Number,
        },
    },
    computed: {
        ...mapState(['board']),
    },
    methods: {
        goToTask(id) {
            this.$router.push({ name: 'task', params: { id: id } })
        },
        pickupTask(e, taskIndex, fromColumnIndex) {
            e.dataTransfer.effectAllowed = 'move'
            e.dataTransfer.dropEffect = 'move'

            e.dataTransfer.setData('task-index', taskIndex)
            e.dataTransfer.setData('from-column-index', fromColumnIndex)
        },
        moveTask(e, toColumnIndex) {
            const fromColumnIndex = e.dataTransfer.getData('from-column-index')
            const fromTasks = this.board.columns[fromColumnIndex].tasks
            const toTasks = this.board.columns[toColumnIndex].tasks
            const tasksIndex = e.dataTransfer.getData('task-index')

            this.$store.commit('MOVE_TASK', {
                fromTasks,
                toTasks,
                tasksIndex,
            })
        },
    },
}
</script>

<style scoped></style>
