<template>
  <div class="flex h-screen items-center justify-center">
    <div class="h-1/3 w-1/3 rounded-xl border-2 border-pink-600 bg-white p-16">
      <h1 class="text-center text-xl">
        Save Youtube Video in Notion Database
      </h1>
      <div class="mt-12 flex flex-col">
        <input v-model="url" type="text" class="mt-12 w-full rounded-md border px-4 py-2 outline-none" placeholder="Paste video URL">
        <button class="mt-4 w-36 self-center rounded-md bg-pink-600 px-4 py-2 font-medium text-white" @click="handleClick">
          Save
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
// const config = useRuntimeConfig()
// const { data } = await useFetch(config.public.API_BASE_URL)

const url = ref('')

const handleClick = (): void => {
  console.log(url.value)
}
</script>
