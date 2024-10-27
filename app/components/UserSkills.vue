<script setup lang="ts">
import {useToast} from "@/components/ui/toast";
import {Cross2Icon, ReloadIcon} from '@radix-icons/vue'

const props = defineProps<{ skills: { name: string, logoName: string, id: number }[] }>();

const emit = defineEmits<{
  deleted: [id: number]
}>()

const route = useRoute();
const {user} = useUserSession();


const isDeleting = ref<Record<number, boolean>>({})
const {toast} = useToast()
const onDelete = async (id: number) => {
  isDeleting.value[id] = true
  try {
    await $fetch(`/api/skills/${Number(id)}`, {
      method: 'delete',
    })
    toast({
      title: 'OK.',
      description: 'se a adicionado ese skill',

    })
    emit('deleted', id)
  } catch (e) {
    toast({
      title: 'Uh oh! Something went wrong.',
      description: 'error' + e,
      variant: 'destructive',
    })
  } finally {
    isDeleting.value[id] = false;
  }
}
</script>

<template>
  <div class="grid grid-cols-7 gap-4 ">
    <div class="col-span-7 text-muted-foreground ml-2 text-sm ">Skills</div>

    <div
        v-for="item in props.skills"
        class="relative flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
    >

      <Button
          class="absolute right-0 top-0  rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
          size="icon" variant="ghost" @click="onDelete(item.id)" :disabled="isDeleting[item.id]">
        <Cross2Icon class="w-3 h-3 " v-if="!isDeleting[item.id] && route.params.id === user?.login"/>
        <ReloadIcon class="w-4 h-4 animate-spin" v-if="isDeleting[item.id]"/>
      </Button>


      <Icon :name="item.logoName" class="mb-3 h-6 w-6"/>
      {{ item.name }}
    </div>

  </div>

</template>

<style scoped>

</style>