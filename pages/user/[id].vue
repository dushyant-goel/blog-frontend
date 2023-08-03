<template>
    <h1 class="text-2xl text-center font-bold mb-4">{{ data?.getUser.username }} </h1>
    <div>
        <ul v-for="(entry, i) of data?.getUser.blogs" :key="entry.title" class="gap-6">
            <li class="bg-white p-4 rounded-lg shadow-md">
                <p class="text-gray-600">
                    {{ i + 1 }}. {{ entry.title }}
                </p>
            </li>
        </ul>
    </div>

    <div v-if="token">
        <label class="lock mb-2 font-bold">Title</label>
        <input v-model="titleRef" type="text" class="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500">
        <label class="lock mb-2 font-bold">Content</label>
        <input v-model="contentRef" type="textarea" class="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500">
        <button @click="handleBlogSubmit()" class="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">Submit</button>
    </div>

</template>

<script setup lang="ts">
const id: number = +useRoute().params.id;
console.log(id);

const { data } = await useAsyncGql({
    operation: 'GetUser',
    variables: { id: id }
});

console.log(data);

const titleRef = ref("new blog");
const contentRef = ref("blog post content");

async function handleBlogSubmit() {
    const title: string = titleRef.value;
    const content: string = contentRef.value;

    console.log(id)

    const blogData = await useAsyncGql({
        operation: 'CreateBlog',
        variables: { title: title, content: content, authorId: id },
    })
}

const store = useTokenStore();
const token = ref(store.token);

</script>