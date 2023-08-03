<template>
    <h1 class="text-3xl font-bold mb-4"># {{ data?.getBlog.title }} </h1>
    <div class="bg-white p-4 rounded-lg shadow-md">
        <p class="text-gray-700"> {{ data?.getBlog.content }} </p>
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