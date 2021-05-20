<template>
    <div id="board">
        <div class="task-bg" v-if="isTaskOpen" @click.self="close">
            <router-view />
        </div>
        <div class="flex flex-row items-start">
            <Column
                v-for="(columnData, $columnIndex) of board.columns"
                :key="$columnIndex"
                :columnData="columnData"
                :columnIndex="$columnIndex"
                :showActiveDropColumnSign="activeColumnSign"
                draggable="true"
                @drop="moveTaskOrColumn($event, columnData.task, $columnIndex)"
                @dragover.prevent
                @dragenter="turnOnBlockOn($event, $columnIndex, true)"
                @dragleave="turnOnBlockOn($event, $columnIndex, false)"
                @dragstart.self="pickupColumn($event, $columnIndex)"
            />
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import Column from '../components/Column.vue'

export default {
    components: {
        Column,
    },
    data() {
        return { activeColumnSign: undefined }
    },
    computed: {
        ...mapState(['board', 'dragEl']),
        isTaskOpen() {
            return this.$route.name === 'task'
        },
    },
    methods: {
        close() {
            this.$router.push({ name: 'board' })
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
        moveTaskOrColumn(e, toTasks, columnIndex) {
            const type = e.dataTransfer.getData('type')
            if (type === 'task') {
                this.moveTask(e, columnIndex)
            } else {
                this.moveColumn(e, columnIndex)
            }
        },
        pickupColumn(e, fromColumnIndex) {
            this.$store.commit('SET_DRAG_EL', {
                draggedElement: e.target,
            })

            e.dataTransfer.effectAllowed = 'move'
            e.dataTransfer.dropEffect = 'move'

            e.dataTransfer.setData('from-column-index', fromColumnIndex)
            e.dataTransfer.setData('type', 'column')
        },
        moveColumn(e, toColumnIndex) {
            const fromColumnIndex = e.dataTransfer.getData('from-column-index')

            this.$store.commit('MOVE_COLUMN', {
                fromColumnIndex,
                toColumnIndex,
            })
        },
        turnOnBlockOn(e, columnIndex, switchOn) {
            /*
            if (switchOn) {
                this.activeColumnSign = columnIndex
            } else {
                this.activeColumnSign = undefined
            }
            */
        },
    },
}
</script>

<style scoped>
#board {
    height: 100%;
}
.column {
    width: 500px;
}

.task-bg {
    background-color: rgba(0, 0, 0, 0.5);
    height: 100%;
    width: 100%;
    position: absolute;
    height: 100%;
}
</style>
