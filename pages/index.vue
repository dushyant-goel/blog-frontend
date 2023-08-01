<template>
    <div>
        <h2>Bloggin'</h2>
    </div>
    <header>
        <nav>
            <ul>
                <li>
                    <NuxtLink to="/about">About</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/signin">Sign In</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/home">Home</NuxtLink>
                </li>
            </ul>
        </nav>
    </header>
</template>
  
<script setup lang="ts">
const route = useRoute()
// When accessing /posts/1, route.params.id will be 1
console.log(route.params.id)
</script>