<template>
    <h1>#{{ id }} {{ data?.getBlog.title }} </h1>
    <div>
        <p> {{ data?.getBlog.content }} </p>
    </div>
</template>

<script setup lang="ts">
const id: number  = +useRoute().params.id;
console.log(id);

const { data } = await useAsyncGql({
    operation: 'GetBlog',
    variables: { id: id }
});

console.log(data);
</script>