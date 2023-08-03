<template>
    <div>
        <h2 class="text-center bg-blue-300 p-10">Bloggin'</h2>
    </div>
    <header>
        <nav class="bg-blue-500 p-4">
            <ul class="flex space-x-4">
                <li>
                    <NuxtLink to="/">Home</NuxtLink>
                </li>
                <li class="hover:underline">
                    <NuxtLink to="/about">About</NuxtLink>
                </li>
                <li v-if="token" class="hover:underlin">
                    Log Out
                </li>
                <li v-else class="hover:underline">
                    <NuxtLink to="/login">Sign In</NuxtLink>
                </li>
            </ul>
        </nav>
    </header>

    <!--- output the page content -->
    <div>
        <slot />
    </div>
</template>

<script setup>
const store = useTokenStore();
const token = ref(store.token);
</script>