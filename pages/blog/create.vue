<template>
    <lable>Title</lable>
    <input v-model="titleRef" type="text">
    <lable>Content</lable>
    <input v-model="contentRef" type="textarea">
    <button @click="handleBlogSubmit">Post</button>
</template>

<script setup lang="ts">

const titleRef = ref("");
const contentRef = ref("");

function handleBlogSubmit() {
    const title: string = titleRef.value;
    const content: string = contentRef.value;

    
}

</script>