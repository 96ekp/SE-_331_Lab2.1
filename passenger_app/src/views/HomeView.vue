<template>
  <div>
    <h1>Passengers</h1>
    <ul class="passenger-list">
      <li v-for="passenger in passengers" :key="passenger.id">
        <router-link :to="{ name: 'passenger-details', params: { id: passenger.id } }">
          {{ passenger.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'
const passengers = ref([])

onMounted(async () => {
  const { data } = await axios.get(
    'https://my-json-server.typicode.com/se331-2022/passengerdb/passenger?_page=1&_limit=5'
  )
  passengers.value = data
})
</script>
<style scoped>
.passenger-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.passenger-list li {
  margin-bottom: 10px;
}

.passenger-list li a {
  text-decoration: none;
  color: #007bff;
  font-weight: bold;
}

.passenger-list li a:hover {
  text-decoration: underline;
}
</style>
