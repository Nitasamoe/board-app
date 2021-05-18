<template>
    <div
        class="
            task-view
            relative
            flex flex-row
            bg-white
            pin
            mx-4
            m-32
            mx-auto
            py-4
            text-left
            rounded
            shadow
        "
    >
        <div class="flex flex-col flex-grow items-start justify-between px-4">
            <div
                class="flex flex-col flex-grow items-start justify-between px-4"
            >
                <input
                    type="text"
                    class="p-2 block w-full mr-2 text-xl font-bold"
                    :value="task.name"
                    @change="updateTaskProperty($event, 'name')"
                    @keyup.enter="updateTaskProperty($event, 'name')"
                />
                <textarea
                    class="
                        relative
                        bg-transparent
                        px-2
                        border
                        mt-2
                        h-64
                        border-none
                        leading-normal
                    "
                    :value="task.description"
                    @change="updateTaskProperty($event, 'description')"
                    @keyup.enter="updateTaskProperty($event, 'description')"
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters(['getTask']),
        task() {
            return this.getTask(this.$route.params.id)
        },
    },
    methods: {
        updateTaskProperty(e, key) {
            this.$store.commit('UPDATE_TASK', {
                task: this.task,
                key,
                value: e.target.value,
            })
        },
    },
}
</script>

<style scoped>
.task-view {
    max-width: 700px;
}
</style>
