<template>
  <div></div>
  <Calendar :showSessions="allSessions" />
  <div class="flex flex-col gap-3 rounded bg-green-200 p-4 text-center">
    <div class="col-span-2 md:col-span-1">
      Session<input v-model="name" class="w-60 rounded border px-2 py-1" />
    </div>
    <div class="col-span-2 md:col-span-1">
      Fecha
      <input type="date" v-model="date" class="w-60 rounded border px-2 py-1" />
    </div>
    <div class="col-span-2 md:col-span-1">
      Hora
      <input v-model="hour" class="w-60 rounded border px-2 py-1" />
    </div>
    <div class="flex justify-center">
      <button
        @click="addtoSessions"
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
      name: "",
      date: "",
      hour: "",
      allSessions: [],
    };
  },
  methods: {
    addtoSessions() {
      const session = {
        name: this.name,
        date: this.date,
        hour: this.hour,
      };
      this.allSessions.push(session);
    },
  },
};
</script>
