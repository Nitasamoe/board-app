import uuid from './components/utils/uuid'

export default {
    name: 'workshop',
    columns: [
        {
            name: 'todo',
            tasks: [
                {
                    description: '',
                    name: 'first task',
                    id: uuid(),
                    userAssigned: null,
                },
                {
                    description: '',
                    name: 'second task',
                    id: uuid(),
                    userAssigned: null,
                },
                {
                    description: '',
                    name: 'third task',
                    id: uuid(),
                    userAssigned: null,
                },
            ],
        },
        {
            name: 'in progress',
            tasks: [
                {
                    description: '',
                    name: 'fourth task',
                    id: uuid(),
                    userAssigned: null,
                },
            ],
        },
        {
            name: 'done',
            tasks: [],
        },
    ],
}
