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
