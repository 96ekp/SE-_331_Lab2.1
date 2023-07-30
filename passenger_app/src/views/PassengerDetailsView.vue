<template>
  <div>
    <h1>Passenger Details</h1>
    <p>Name: {{ passenger.first_name }} {{ passenger.last_name }}</p>
    <p>Age: {{ passenger.age }}</p>
    <p>Gender: {{ passenger.gender }}</p>

    <router-view :passenger="passenger" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { EventItem } from '@/types'

const props = defineProps(['id'])

const passenger = ref<EventItem | null>(null)

onMounted(async () => {
  try {
    const { data } = await axios.get(
      `https://my-json-server.typicode.com/se331-2022/passengerdb/passenger/${props.id}`
    )
    passenger.value = data
  } catch (error) {
    console.error(error)
    router.push({ name: 'not-found' })
  }
})
</script>

<style scoped>
/* Add your styles here */
</style>
