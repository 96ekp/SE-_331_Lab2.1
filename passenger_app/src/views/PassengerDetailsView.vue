<template>
  <div>
    <h1>Passenger Details</h1>
    <p>Name: {{ passenger.first_name }} {{ passenger.last_name }}</p>
    <p>Email: {{ passenger.email }}</p>
    <p>Gender: {{ passenger.gender }}</p>
    <p>Source: {{ passenger.Source }}</p>
    <p>Destination: {{ passenger.Destination }}</p>
    <p>Travel Date: {{ passenger.travelDate }}</p>

    <router-view :passenger="passenger" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { EventItem } from '../types'

const props = defineProps(['id'])
const passenger = ref<EventItem | null>(null)

onMounted(async () => {
  const { data } = await axios.get(
    `https://my-json-server.typicode.com/se331-2022/passengerdb/passenger/${props.id}`
  )
  passenger.value = data
})
</script>
