<script setup lang="ts">
import {StarIcon} from '@radix-icons/vue'

const route = useRoute()
const {data, status} = await useFetch('/api/github/repos')
const {user} = useUserSession()
</script>

<template>
  <div>
    <div class="flex items-center space-x-4">
      <Avatar class="h-20 w-20">
        <AvatarImage :src="`https://github.com/${route.params.id}.png`" :alt="route.params.id" />
        <AvatarFallback>SC</AvatarFallback>
      </Avatar>
      <div>
        <p class="text-sm font-medium leading-none">
          {{user.login}}
        </p>
        <p class="text-sm text-muted-foreground">
          {{ user.name }}
        </p>
      </div>
    </div>

    <SkillsSection/>
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