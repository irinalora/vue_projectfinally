<template>
  <div></div>
  <Calendar />
  <div class="flex flex-col gap-3 rounded bg-green-200 p-4 text-center">
    <div class="bg-orange-200">
      Sessión :
      <input v-model="sessión" class="border" />
    </div>
    <div>
      Fecha :
      <input v-model="date" class="border" />
    </div>
    <div>
      Hour :
      <input v-model="hour" class="border" />
    </div>
    <div class="flex justify-center">
      <button
        @click="handleSubmit"
        class="gap-1 rounded bg-green-400 p-2 text-center"
      >
        Añadir
      </button>
    </div>
  </div>
</template>
<script>
import Calendar from "../components/Calendar.vue";

export default {
  name: "Home",
  components: {
    Calendar,
  },
  data() {
    return {
      sessión: "",
      date: "YYYY-MM-DD",
      hour: "",
      //AQUÍ UN ARRAY Y SE LA PASO A CALENDAR
    };
  },
  methods: {},
};
</script>
