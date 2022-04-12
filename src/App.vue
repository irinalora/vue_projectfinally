<template>
  <div class="container mx-auto p-4">
    <hr class="my-4" />
    <div class="mr-12 flex justify-end space-x-4 text-sm font-bold">
      <RouterLink to="/" class="mr-2 rounded border p-2">Home</RouterLink>

      <a href="http://irinalora.es/yoga/" class="mr-2 rounded border p-2">
        AboutMe
      </a>
    </div>
    <RouterView />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>
