<template class="bg-gray-100">
    <h1 class="text-4xl font-bold text-center mb-4 p-10">Blogs</h1>
    <div class="container mx-auto p-6">
        <ul class="gap-6">
            <li v-for="(entry, i) of data?.blogs" :key="entry.title" class="bg-white p-4 rounded-lg shadow-md">
                <NuxtLink :to="`/blog/${i+1}`">
                <p class="text-xl font-semibold mb-2"> {{ i + 1 }}. {{ entry.title }}</p>
                <p class="text-gray-600">by {{ entry.author.username }}</p>
            </NuxtLink>
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>

const { id } = useRoute().params;

const { data } = await useAsyncGql({
  operation: 'ListBlogs'
});
</script>