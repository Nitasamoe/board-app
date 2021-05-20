import { createStore } from 'vuex'
import defaultBoard from '../default-board'
import { saveStatePlugin } from '../components/utils/saveStatePlugin'
import { idText } from 'typescript'
import uuid from '../components/utils/uuid'
//const board = defaultBoard
const board = JSON.parse(localStorage.getItem('board')) || defaultBoard

export default createStore({
    plugins: [saveStatePlugin],
    state: {
        board,
        dragEl: 'hallo',
    },
    mutations: {
        CREATE_TASK(state, { tasks, name }) {
            tasks.push({
                name,
                id: uuid(),
                description: '',
            })
        },
        UPDATE_TASK(state, { task, key, value }) {
            task[key] = value
            //Vue.set(task, key, value)
        },
        MOVE_TASK(state, { fromTasks, toTasks, taskIndex }) {
            const taskToMove = fromTasks.splice(taskIndex, 1)[0]
            toTasks.push(taskToMove)
        },
        MOVE_COLUMN(state, { fromColumnIndex, toColumnIndex }) {
            const columnList = state.board.columns
            const columnToMove = columnList.splice(fromColumnIndex, 1)[0]
            columnList.splice(toColumnIndex, 0, columnToMove)
        },
        SET_DRAG_EL(state, { draggedElement }) {
            state.dragEl = draggedElement
        },
    },
    getters: {
        getTask(state) {
            return (id) => {
                for (const column of state.board.columns) {
                    for (const task of column.tasks) {
                        if (task.id == id) {
                            return task
                        }
                    }
                }
            }
        },
    },
    actions: {},
    modules: {},
})
