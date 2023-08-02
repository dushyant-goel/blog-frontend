<template>
    <h1>BLOG LIST</h1>
    <div>
        <p v-for="(entry, i) of data?.blogs" :key="entry.title">
            {{ i + 1 }}. Title
            {{ entry.title }} by
            {{ entry.author.username }}

        <p>
            {{ entry.content }}
        </p>
        </p>
        

    </div>
</template>

<script lang="ts" setup>
const { data } = await useAsyncGql({
  operation: 'ListBlogs'
});
</script>