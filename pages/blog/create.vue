<template>
    <label>Title</label>
    <input v-model="titleRef" type="text">
    <label>Content</label>
    <input v-model="contentRef" type="textarea">
    <button @click="handleBlogSubmit()">Submit</button>
</template>

<script setup lang="ts">

const titleRef = ref("new blog");
const contentRef = ref("blog post content");

async function handleBlogSubmit() {
    const title: string = titleRef.value;
    const content: string = contentRef.value;

    const { data } = await useAsyncGql({
        operation: 'CreateBlog',
        variables: { title: title, content: content, authorId: 1 },
    })
}

// const { data } = await useAsyncGql({
//     operation: 'CreateBlog',
//     variables: { title: 'hello', content: 'best content', authorId: 1 },
// })

</script>