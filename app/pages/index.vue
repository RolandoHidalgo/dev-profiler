<script setup lang="ts">
import {EnvelopeOpenIcon} from '@radix-icons/vue'

const {user, loggedIn, clear} = useUserSession();
</script>

<template>
  <div>
    <h1>Hi</h1>

    <NuxtLink to="/api/auth/github" external v-if="!loggedIn">
      <Button>
        <EnvelopeOpenIcon class="w-4 h-4 mr-2"/>
        login
      </Button>
    </NuxtLink>


    <div class="flex flex-col gap-4 w-full items-center mt-10" v-else>
      <Avatar>
        <AvatarImage :src="`https://github.com/${user.login}.png`" :alt="user.login"/>
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      {{ user.login }}
      <Button @click="clear">logout</Button>
    </div>
  </div>
</template>
