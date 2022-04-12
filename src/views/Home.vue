<template>
  <div></div>
  <Calendar :showSessions="allSessions" />
  <div class="flex flex-col gap-3 rounded bg-green-200 p-4 text-center">
    <div class="bg-orange-200">
      Session :
      <input v-model="name" class="border" />
    </div>
    <div>
      Fecha :
      <input type="date" v-model="date" class="border" />
    </div>
    <div>
      Hour :
      <input v-model="hour" class="border" />
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
