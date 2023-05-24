<template>
  <div class="flex h-screen items-center justify-center">
    <div class="mx-4 rounded-xl border bg-white p-16">
      <h1 class="text-center text-lg md:text-xl">
        Save Youtube Video in Notion Database
      </h1>
      <form class="mt-12 flex flex-col">
        <input v-model="url" type="text" class="w-full rounded-md border px-4 py-2 outline-none" placeholder="Paste video URL" required>
        <button class="mt-4 w-full self-center rounded-md bg-pink-600 px-4 py-2 font-medium text-white transition hover:bg-pink-700" @click="handleClick">
          Save
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang='ts'>
const config = useRuntimeConfig()

const url = ref('')

const handleClick = (): void => {
  useFetch(config.public.API_BASE_URL, {
    method: 'POST',
    body: {
      url: url.value
    }
  })
}
</script>
