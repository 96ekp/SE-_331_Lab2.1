<template>
  <div class="not-found">
    <h1>Page Not Found</h1>
    <h3>The page you're looking for does not exist.</h3>
    <router-link :to="{ name: 'home' }">Back to Home</router-link>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
</script>
