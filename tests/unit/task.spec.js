import { shallowMount } from '@vue/test-utils'
import Task from '../../src/components/Task.vue'

describe('Task.vue', () => {
    const taskTitle = 'Title One'
    const taskDescription = 'Description One'
    const wrapper = shallowMount(Task, {
        propsData: {
            title: taskTitle,
            description: taskDescription,
        },
    })

    test('Test if the title is being portrayed', () => {
        // Expect the inserted Title to be seen
        expect(wrapper.text()).toContain(taskTitle)
    })

    test('Test if the description is being portrayed', () => {
        // Expect the inserted Description to be seen
        expect(wrapper.text()).toContain(taskDescription)
    })
})
