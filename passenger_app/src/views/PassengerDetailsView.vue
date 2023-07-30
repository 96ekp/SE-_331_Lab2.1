<template>
  <div>
    <h1>Passenger Details</h1>
    <p>Name: {{ passenger.name }}</p>
    <p>Age: {{ passenger.age }}</p>
    <p>Gender: {{ passenger.gender }}</p>

    <router-view :passenger="passenger" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onErrorCaptured } from 'vue'
import axios from 'axios'

const passenger = ref(null)

onMounted(async () => {
  try {
    const { data } = await axios.get(
      `https://my-json-server.typicode.com/se331-2022/passengerdb/passenger/${props.id}`
    )
    passenger.value = data
  } catch (error) {
    // Handle resource not found (404) error
    if (error.response && error.response.status === 404) {
      router.push({ name: 'not-found' })
    } else {
      router.push({ name: 'network-error' })
    }
  }
})
</script>
