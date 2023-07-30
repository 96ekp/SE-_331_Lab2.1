<template>
  <header>
    <nav><RouterLink to="/">Home</RouterLink> | <RouterLink to="/about">About</RouterLink></nav>
  </header>

  <main>
    <!-- The main content of your application will be rendered here -->
    <router-view :passenger="passenger" />
  </main>
</template>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  display: flex;
  gap: 20px;
}

.nav-link {
  font-weight: bold;
  color: #2c3e50;
  margin-right: 20px;
}

.nav-link.router-link-exact-active {
  color: #42b983;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

h4 {
  font-size: 20px;
}

/* Add your styles here */
.page-size-selection {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

label {
  margin-right: 5px;
}

@media (min-width: 1024px) {
  #app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
import { EventItem } from '@/types'
</script>
