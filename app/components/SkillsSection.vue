<script setup lang="ts">
import { useForm } from 'vee-validate';
import {z} from 'zod';
import { toTypedSchema } from '@vee-validate/zod'
const schema = z.object({
  skill: z
      .string({
        required_error: 'Requerido.'
      })
})
const { values } = useForm({
  validationSchema:toTypedSchema(schema)
});
</script>

<template>
  <div class="w-1/4 mb-2">
    <form >
      <SkillsAutocomplete label="skills"></SkillsAutocomplete>
    </form>
  </div>
</template>

<style scoped>

</style>