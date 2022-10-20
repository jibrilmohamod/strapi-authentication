<script setup>
 import { RouterView } from "vue-router"
 import TheNav from "./components/TheNav.vue"
</script>

<template>
 <header>
  <div>
   <TheNav />
  </div>
 </header>

 <RouterView />
</template>
