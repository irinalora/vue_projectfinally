<template>
  <NavBar />
  <div class="container mx-auto p-4">
    <hr class="my-4" />
    <RouterView />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>
