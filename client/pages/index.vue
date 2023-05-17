<template>
  <div class="bg-teal-400 text-xl">
    hello world
    <button @click="add">
      add item
    </button>
  </div>
</template>

<script setup lang='ts'>
import { addItem } from '~/api/notion'

const add = (): void => {
  addItem('Yurts in Big Sur, California')
}

</script>
