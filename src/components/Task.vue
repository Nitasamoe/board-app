<template>
    <div @click="goToTask(id)" class="border-solid border-2 p-2 m-2">
        <span class="font-semibold">{{ title }}</span>
        <p>{{ description }}</p>
    </div>
</template>

<script lang="ts">
export default {
    props: {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        id: {
            type: String,
            required: true,
        },
        assigne: {
            type: String,
        },
    },
    methods: {
        goToTask(id) {
            this.$router.push({ name: 'task', params: { id: id } })
        },
    },
}
</script>

<style scoped></style>
