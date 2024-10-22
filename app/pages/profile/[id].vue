<script setup lang="ts">
import {StarIcon} from '@radix-icons/vue'

const route = useRoute()
const {data, status} = await useFetch('/api/github/repos')
</script>

<template>
  <div>
    <Avatar class="h-20 w-20">
      <AvatarImage :src="`https://github.com/${route.params.id}.png`" :alt="route.params.id" />
      <AvatarFallback>SC</AvatarFallback>
    </Avatar>
    <div class="grid grid-cols-3 gap-4 w-full">
      <div
          v-for="item in data"
          :key="item.name"
          class="flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent cursor-pointer"
      >
        <div class="flex w-full flex-col gap-1">
          <div class="flex items-center">
            <div class="flex items-center gap-2">
              <div class="font-semibold">
                {{ item.name }}
              </div>

            </div>

          </div>

        </div>
        <div class="line-clamp-2 text-xs text-muted-foreground">
          {{ item.description }}
        </div>
        <div class="ml-auto">
          <Button size="xs" variant="ghost">
            {{ item.stars }}
            <StarIcon class="w-4 h-4 ml-1"></StarIcon>

          </Button>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>

</style>