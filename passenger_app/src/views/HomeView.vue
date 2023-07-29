<template>
  <div>
    <h1>Passengers</h1>
    <ul>
      <li v-for="passenger in passengers" :key="passenger.id">
        <router-link :to="{ name: 'passenger-details', params: { id: passenger.id } }">
          {{ passenger.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios'

const { data: passengers } = await axios.get(
  'https://my-json-server.typicode.com/se331-2022/passengerdb/passenger?_page=1&_limit=5'
)
</script>
