<template>
  <div>
    <h2>Airline Details</h2>
    <p>Airline Name: {{ airline.name }}</p>
    <p>Country: {{ airline.country }}</p>
    <p>Founded: {{ airline.founded }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { EventItem } from '@/types'

const props = defineProps(['airlineId'])
const airline = ref<Airline | null>(null)

onMounted(async () => {
  try {
    const { data } = await axios.get(
      `https://my-json-server.typicode.com/se331-2022/passengerdb/airline/${props.airlineId}`
    )
    airline.value = data
  } catch (error) {
    console.error(error)
    router.push({ name: 'not-found' })
  }
})
</script>

<style scoped>
/* Add your styles here */
</style>
