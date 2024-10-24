<script setup lang="ts">
const props = defineProps<{ skills: { name: string, logoName: string }[] }>();
</script>

<template>
  <div class="grid grid-cols-7 gap-4">
    <div class="col-span-7 text-muted-foreground ml-2 text-sm ">Skills</div>

    <Label
        v-for="item in props.skills"
        class="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
    >
      <Icon :name="item.logoName" class="mb-3 h-6 w-6"/>
      {{ item.name }}
    </Label>

  </div>

</template>

<style scoped>

</style>