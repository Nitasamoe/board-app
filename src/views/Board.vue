<template>
    <div id="board"></div>
    <div class="flex flex-row items-start">
        <div
            class="column"
            v-for="columnData of board.columns"
            :key="columnData"
        >
            <Column :columnData="columnData" />
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
    computed: mapState(['board']),
}
</script>

<style scoped>
#board {
    background-color: aquamarine;
    height: 100%;
}
.column {
    width: 500px;
}
</style>
