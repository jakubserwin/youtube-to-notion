<template>
  <div class="flex h-screen items-center justify-center">
    <div class="mx-4 rounded-xl border bg-white p-16">
      <h1 class="text-center text-lg md:text-xl">
        Save Youtube Video in Notion Database
      </h1>
      <div class="mt-12 flex flex-col">
        <input v-model="url" type="text" class="w-full rounded-md border px-4 py-2 outline-none" placeholder="Paste video URL" />
        <p v-if="error" class="text-sm text-red-500">
          {{ error }}
        </p>
        <button class="mt-4 w-full self-center rounded-md bg-pink-600 px-4 py-2 font-medium text-white transition hover:bg-pink-700" @click="handleClick">
          Save
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { z, ZodError } from 'zod'

const url = ref('')
const error = ref('')

const schema = z.string().url({ message: 'Invalid URL format' })

const handleClick = (): void => {
  try {
    schema.parse(url.value)

    useFetch('/api/create-page', {
      method: 'POST',
      body: {
        url: url.value
      }
    })

    error.value = ''
  } catch (err: unknown) {
    if (err instanceof ZodError) {
      error.value = err.errors[0].message
    } else {
      console.error(err)
    }
  }
}
</script>
