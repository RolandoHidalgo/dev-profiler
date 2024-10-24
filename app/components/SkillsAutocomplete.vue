<script setup lang="ts">
const props = defineProps<{
  label: string
}>();
const {data:items} = await useFetch('/api/skills');
</script>

<template>
  <FormField
      v-slot="{ componentField }"
      name="skill"
  >
    <FormItem>
<!--      <FormLabel>{{ props.label }}</FormLabel>-->

      <Select v-bind="componentField">
        <SelectTrigger>
          <SelectValue placeholder="Select a skill"/>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Skills</SelectLabel>
            <SelectItem
                v-for="item in items"
                :key="item.id"
                :value="item.id.toString()"
            >


             <Button variant="ghost" class="w-full">
               <Icon :name="item.logoName" class="mr-2 w-6 h-6" />{{ item.name }}
             </Button>
            </SelectItem>

          </SelectGroup>
        </SelectContent>
      </Select>

      <FormMessage/>
    </FormItem>
  </FormField>
</template>

<style scoped>

</style>