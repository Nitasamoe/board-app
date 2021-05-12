<template>
    <div class="border-solid border-2 p-2 m-2">
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
        assigne: {
            type: String,
        },
    },
}
</script>

<style scoped></style>
