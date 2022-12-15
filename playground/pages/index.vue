<template>
  <div class="page-index">
    <h1>Home page</h1>
    <h3>App Config:</h3>
    <p>{{ appConfig }}</p>
  </div>
</template>

<script setup lang="ts">
const appConfig = useAppConfig()
</script>
