<template>
    <h1>USER LIST</h1>
    <div>
        <p v-for="(entry, i) of data?.users" :key="entry.username">
            {{ i + 1 }}. 
            {{ entry.username }}
        </p>

    </div>
</template>

<script lang="ts" setup>
const { data } = await useAsyncGql({
  operation: 'ListUsers'
});
</script>