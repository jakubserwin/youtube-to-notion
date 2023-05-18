<template>
  <pre>
    {{ data }}
  </pre>
</template>

<script setup lang='ts'>
const config = useRuntimeConfig()
const { data } = await useFetch(config.public.API_BASE_URL)
</script>
