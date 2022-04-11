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
        @click="addtoSessions(session)"
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
      allSessions: [
        {
          nom: "event1",
          date: "",
          hour: "",
          nom: "event2",
          date: "",
          hour: "",
          nom: "event3",
          date: "",
          hour: "",
        },
      ],
    };
  },
  methods: {
    addsession(session) {
      this.allSessions.push(session);
    },
  },
};
</script>
