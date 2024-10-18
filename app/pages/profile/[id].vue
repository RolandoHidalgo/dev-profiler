<script setup lang="ts">
const route = useRoute()
</script>

<template>
<div>
  hi {{route.params.id}}
</div>
</template>

<style scoped>

</style>