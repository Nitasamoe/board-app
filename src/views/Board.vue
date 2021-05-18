<template>
    <div id="board">
        <div class="task-bg" v-if="isTaskOpen" @click.self="close">
            <router-view />
        </div>
        <div class="flex flex-row items-start">
            <Column
                v-for="columnData of board.columns"
                :key="columnData"
                :columnData="columnData"
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
    computed: {
        ...mapState(['board']),
        isTaskOpen() {
            return this.$route.name === 'task'
        },
    },
    methods: {
        close() {
            this.$router.push({ name: 'board' })
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
