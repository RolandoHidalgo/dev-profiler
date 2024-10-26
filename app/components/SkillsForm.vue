<script setup lang="ts">
import {useForm} from 'vee-validate';
import {z} from 'zod';
import {toTypedSchema} from '@vee-validate/zod'
import {useToast} from "@/components/ui/toast";
import {
  PlusCircle,
} from 'lucide-vue-next'
import {ReloadIcon} from "@radix-icons/vue";

const route = useRoute()
const showField = ref(false)
const emit = defineEmits<{
  submit: [id: number]
}>()
const schema = z.object({
  skill: z
      .string({
        required_error: 'Requerido.'
      })
})
const {values, handleSubmit,isSubmitting} = useForm({
  validationSchema: toTypedSchema(schema)
});
const {toast} = useToast()
const submit = handleSubmit(async (values,ctx) => {
  try {
    await $fetch('/api/skills', {
      method: 'post',
      body: {
        skillId: Number(values.skill)
      }
    })
    toast({
      title: 'OK.',
      description: 'se a adicionado ese skill',

    })
    emit('submit', Number(values.skill))
    ctx.resetForm();
  } catch (e) {
    toast({
      title: 'Uh oh! Something went wrong.',
      description: 'error' + e,
      variant: 'destructive',
    })
  }
})

</script>

<template>
  <div class="w-1/4 my-2 ml-auto pr-2">
    <form @submit="submit" class="flex items-center gap-1">
      <SkillsAutocomplete label="skills" ></SkillsAutocomplete>

      <Button size="sm" class="h-7 gap-1" type="submit">
        <PlusCircle class="h-3.5 w-3.5" v-if="!isSubmitting"/>
        <ReloadIcon class="w-4 h-4 animate-spin" v-else/>
        <span class="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  Add Skill
                </span>
      </Button>
    </form>
  </div>
</template>

<style scoped>

</style>