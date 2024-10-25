<script setup lang="ts">
const route = useRoute()
const {user} = useUserSession()
const {data: skills, refresh} = useFetch('/api/skills/list', {
  method: 'post',
  body: {
    userName: route.params.id
  }
})
const onSkillAdd = (id: number) => {
  refresh()
}
const onSkillDeleted = (id:number)=>{
  refresh()
}
</script>

<template>
  <div>
    <SkillsForm @submit="onSkillAdd" v-if="route.params.id === user.login"/>
    <UserSkills :skills="skills" @deleted="onSkillDeleted"/>
  </div>
</template>

<style scoped>

</style>