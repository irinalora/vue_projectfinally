<template>
  <div class="flex justify-center">
    <div class="m-4 flex gap-10 text-center font-serif text-2xl font-semibold">
      <button @click="prevMonth">
        ◀
        <font-awesome-icon icon="fa-solid fa-angle-left" />
      </button>
      <div>{{ monthName[month] }}, {{ year }}</div>
      <button @click="nextMonth">▶</button>
    </div>
  </div>
  <div class="grid grid-cols-7 gap-10 border-4">
    <div class="mt-4">Mon</div>
    <div class="mt-4">Tue</div>
    <div class="mt-4">Wed</div>
    <div class="mt-4">Thu</div>
    <div class="mt-4">Fri</div>
    <div class="mt-4">Sat</div>
    <div class="mt-4">Sun</div>
    <div v-for="n in emptyDays" :key="n"></div>
    <div v-for="day in days" :key="day" class="hover:bg-slate-300">
      <div :class="{ 'rounded bg-green-500 text-white': isItToday(day) }">
        {{ day.getDate() }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["allSessions"],
  data() {
    return {
      month: new Date().getMonth(),
      year: new Date().getFullYear(),
      monthName: [
        "January",
        "Febrary",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
    };
  },
  computed: {
    days() {
      let date = new Date(this.year, this.month, 1);
      let days = [];
      while (date.getMonth() === this.month) {
        days.push(new Date(date));
        date.setDate(date.getDate() + 1);
      }
      return days;
    },
    emptyDays() {
      const hoy = new Date(this.year, this.month, 1);
      if (hoy.getDay() === 0) return 6;
      return hoy.getDay() - 1;
    },
  },
  methods: {
    // dibuja el mes anterior
    prevMonth() {
      //comprueba si estamos en enero, en el mes 0
      if (this.month !== 0) {
        this.month--;
      } else {
        this.month = 11;
        //de enero a diciembre restamos un año
        this.year--;
      }
    },
    // dibuja em mes siguiente
    nextMonth() {
      // si el mes es distinto de once
      if (this.month !== 11) {
        this.month++;
      } else {
        //si el mes es 11 le indicamos que pase a enero
        this.month = 0;
        //el año le sumamos uno
        this.year++;
      }
    },
    isItToday(someDate) {
      const today = new Date();
      return (
        someDate.getDate() == today.getDate() &&
        someDate.getMonth() == today.getMonth() &&
        someDate.getFullYear() == today.getFullYear()
      );
    },
  },
};
</script>
