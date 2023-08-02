<template>
    <h1>#{{ id }} {{ data?.getUser.username }} </h1>
    <div>
        <p v-for="(entry, i) of data?.getUser.blogs" :key="entry.title">
            {{ i + 1 }}. {{ entry.title }}
        </p>
    </div>
</template>

<script setup lang="ts">
const id: number  = +useRoute().params.id;
console.log(id);

const { data } = await useAsyncGql({
    operation: 'GetUser',
    variables: { id: id }
});

console.log(data);
</script>