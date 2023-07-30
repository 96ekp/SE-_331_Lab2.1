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
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { defineProps } from 'vue'

const props = defineProps(['id'])
const passenger = ref(null)

onMounted(async () => {
  try {
    const { data } = await axios.get(
      `https://my-json-server.typicode.com/se331-2022/passengerdb/passenger/${props.id}`
    )
    passenger.value = data
  } catch (error) {
    router.push({ name: 'not-found' })
  }
})
</script>

<style scoped>
/* Add your styles here */
</style>
