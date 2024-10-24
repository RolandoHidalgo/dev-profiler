<script setup lang="ts">
import {useColorMode} from "@vueuse/core";
import {MoonIcon, SunIcon} from 'lucide-vue-next'

const colorMode = useColorMode()
const switchTheme = () => {
  if (colorMode.value === 'dark') {
    colorMode.value = 'light'
  } else {
    colorMode.value = 'dark'
  }
}
</script>

<template>
  <Button size="icon" variant="ghost" @click="switchTheme">
    <SunIcon v-if="colorMode==='dark'"/>
    <MoonIcon v-else/>
  </Button>
</template>

<style scoped>

</style>