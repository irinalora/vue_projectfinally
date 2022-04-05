<template>
  <div>Home page</div>
  <div v-if="loading">Loading...</div>
  <div v-if="error" class="text-red-600">
    {{ error }}
  </div>
</template>
<script></script>
