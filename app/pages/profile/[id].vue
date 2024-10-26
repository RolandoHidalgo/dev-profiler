<script setup lang="ts">
import {StarIcon} from '@radix-icons/vue'
import type {GithubProfileOverView} from "~/types/github";

const route = useRoute()
const {data: user} = await useFetch<GithubProfileOverView>(`/api/github/profile/${route.params.id}`)

</script>

<template>
  <div class="grid grid-cols-3 gap-1 w-full ">
    <Card class="overflow-hidden">
      <CardHeader class="bg-muted/50 p-2">
        <div class="flex items-center space-x-1  ">
          <Avatar class="h-20 w-20">
            <AvatarImage :src="`https://github.com/${route.params.id}.png`" :alt="route.params.id"/>
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
          <div>
            <p class="text-sm font-medium leading-none">
              {{ user?.login }}
            </p>
            <p class="text-sm text-muted-foreground">
              {{ user?.name }}
            </p>
            <p class="text-sm text-muted-foreground ">
              <NuxtLink class=" group  hover:text-primary" :to="`https://github.com/${user?.login}?tab=followers`"
                        target="_blank">
                <div class="flex justify-start">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      class="h-4 w-4 text-muted-foreground mr-1 group-hover:text-primary"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                  <span class=" text-foreground font-medium mr-1 group-hover:text-primary">{{ user?.followers }}</span> followers
                </div>
              </NuxtLink>
            </p>
          </div>
        </div>

      </CardHeader>
      <CardContent class="p-2 text-sm">
        <div class="grid grid-cols-2 gap-1 w-full">
          <div class="w-full col-span-2 text-muted-foreground ml-2 text-sm">Top most starred repos</div>

          <div
              v-for="item in user?.repos"
              :key="item.name"
              class="flex flex-col items-start gap-2 rounded-lg border p-2 text-left text-sm transition-all hover:bg-accent cursor-pointer shadow bg-card"
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
              {{ item.description ?? 'No description provided for this repo' }}
            </div>
            <div class="ml-auto mt-auto">
              <Button size="xs" variant="ghost">
                {{ item.stars }}
                <StarIcon class="w-4 h-4 ml-1"></StarIcon>

              </Button>
            </div>

          </div>
        </div>
      </CardContent>
    </Card>
    <Tabs default-value="skills" class="flex flex-col col-span-2">
      <div class="flex items-center">
        <TabsList>
          <TabsTrigger value="skills">
            Skills
          </TabsTrigger>
          <TabsTrigger value="month">
            Others
          </TabsTrigger>
          <TabsTrigger value="year">
            More
          </TabsTrigger>
        </TabsList>

      </div>
      <TabsContent value="skills" class="flex flex-1">
        <Card >

          <CardContent>
            <SkillsSection />
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>





  </div>
</template>

<style scoped>

</style>