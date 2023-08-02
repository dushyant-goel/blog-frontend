<template>
  <h1>Login</h1>

  <label>Username</label>
  <input v-model="usernameRef" type="text" placeholder="username">
  <label>Password</label>
  <input v-model="passwordRef" type="password">
  <button @click="handleLogIn">Login</button>

  <p>{{ token }}</p>

</template>

<script setup lang="ts">
import { ref } from 'vue'

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
  
  token = ref(data.value.signin.token);
}
</script>
