import uuid from './components/utils/uuid'

export default {
    name: 'workshop',
    columns: [
        {
            name: 'todo',
            tasks: [
                {
                    description:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
                    name: 'first task',
                    id: 1234567,
                    userAssigned: null,
                },
                {
                    description:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
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
                    description: 'Lorem ipsum dolor sit amet',
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
