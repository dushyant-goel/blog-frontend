<template>
    <h1 class="text-4xl font-bold text-center mb-4 p-10">USER LIST</h1>
    <div class="gap-6">
        <ul v-for="(entry, i) of data?.users" :key="entry.username" class="container mx-auto p-6">
            <NuxtLink :to="`/user/${i+1}`">
                <li class="bg-white p-4 rounded-lg shadow-md">
                    <p  class="text-gray-600">
                        {{ entry.username }}
                    </p>
                </li>
            </NuxtLink>
        </ul>

    </div>
</template>

<script lang="ts" setup>
const { data } = await useAsyncGql({
  operation: 'ListUsers'
});
</script>