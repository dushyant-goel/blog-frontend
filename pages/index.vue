<template>
    <h2 text-3xl font-bold text-center mb-4 p-3></h2>
    <div class="container mx-auto p-6">

        <ul class="flex space-x-6 p-4">
            <li class="flex-1">
                <div class="bg-blue-500 p-4 rounded-lg shadow-md text-center">
                    <NuxtLink to="/blog" class="text-white font-bold">
                        Blogs
                    </NuxtLink>
                </div>
            </li>
            <li class="flex-1">
                <div class="bg-blue-500 p-4 rounded-lg shadow-md text-center">
                    <NuxtLink to="/user" class="text-white font-bold">
                        Users
                    </NuxtLink>
                </div>
            </li>
        </ul>
    </div>
</template>
<script setup>

</script>