<template>
    <div class="dropzone column width500 flex flex-row">
        <div
            v-if="checkIfCurrentColumnIsActiveSign"
            class="borderLeft border-solid border-black border-2"
        ></div>
        <div class="column w-full p-2 m-2 border-solid border-2">
            {{ columnData.name }}
            <div
                v-for="(taskData, $taskIndex) of columnData.tasks"
                :key="$taskIndex"
            >
                <Task
                    :assigne="taskData.userAssigned"
                    :title="taskData.name"
                    :description="taskData.description"
                    :id="taskData.id"
                    :taskIndex="$taskIndex"
                    :columnIndex="columnIndex"
                />
            </div>
            <input
                type="text"
                class="block p-2 w-full bg-trasnparent"
                placeholder="+ Enter new Task"
                @keyup.enter="createTask($event, columnData.tasks)"
            />
        </div>
    </div>
</template>

<script lang="ts">
import { compile } from 'vue'
import Task from './Task.vue'

export default {
    props: ['columnData', 'columnIndex', 'showActiveDropColumnSign'],
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
    computed: {
        checkIfCurrentColumnIsActiveSign() {
            console.log('--------------')
            console.log(this.columnIndex)
            console.log(this.showActiveDropColumnSign)
            return this.showActiveDropColumnSign === this.columnIndex
        },
    },
}
</script>

<style scoped>
.width500 {
    width: 500px;
}

.showBorder {
    display: block;
}
</style>
