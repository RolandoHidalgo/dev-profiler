<script setup lang="ts">
import { GithubLogoIcon } from '@radix-icons/vue'
import {Code2 } from 'lucide-vue-next'
//import {useColorMode} from "@vueuse/core";
//const colorMode = useColorMode()
//colorMode.value = 'dark'
const {loggedIn} = useUserSession();

</script>
<template>
  <NuxtLoadingIndicator />
  <NuxtRouteAnnouncer/>
  <Toaster />
  <div class="flex-col md:flex">
    <div class="border-b">
      <div class="flex h-16 items-center px-4">
        <NuxtLink to="/" >
        <Button variant="outline" size="icon" aria-label="Home">
          <Code2 class="size-15 " />
        </Button>
        </NuxtLink>
        <h1 class="ml-1 text-xl font-semibold">
          DevProfiler
        </h1>
        <MainNav class="mx-6"/>
        <div class="ml-auto flex items-center space-x-4">
          <ThemeSwitcher/>
          <NuxtLink to="/api/auth/github" external v-if="!loggedIn">
            <Button variant="outline">
              <GithubLogoIcon class="w-4 h-4 mr-2"/>
              login
            </Button>
          </NuxtLink>
          <UserNav v-else/>
        </div>
      </div>
    </div>
    <div class="flex-1 space-y-4 p-8 pt-6">
<!--      <div class="flex items-center justify-between space-y-2">-->
<!--        <h2 class="text-3xl font-bold tracking-tight">-->
<!--          Dashboard-->
<!--        </h2>-->
<!--        <div class="flex items-center space-x-2">-->

<!--          <Button>Download</Button>-->
<!--        </div>-->
<!--      </div>-->
      <NuxtPage/>
    </div>

  </div>

</template>