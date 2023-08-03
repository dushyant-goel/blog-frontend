<template>
  <h1 class="text-2xl font-bold mx-auto p-10">Login</h1>
<div class="max-w-sm mx-auto bg-white p-6 rounded-lg shadow-md">
  
  <label class="lock mb-2 font-bold">Username</label>
  <input v-model="usernameRef" type="text" placeholder="username" class="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500">
  <label class="lock mb-2 font-bold">Password</label>
  <input v-model="passwordRef" type="password" class="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500">
  <button @click="handleLogIn" class="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">Login</button>
</div>

  <p>{{ token }}</p>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const store = useTokenStore();

let usernameRef = ref("")
let passwordRef = ref("")
let token = ref("")

async function handleLogIn() {
  const username: string = usernameRef.value;
  const password: string = passwordRef.value;

  let { data } = await useAsyncGql({
    operation: 'SignIn',
    variables: { username: username, password: password },
  })

  token = ref(data?.value?.signin?.token);
  console.log(`token: ${token.value}`);

  if (token) {
    store.token = token.value;
  }


}
</script>
