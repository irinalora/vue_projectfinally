<template>
  <div class="gap-10 text-center">Mayo, 2022</div>
  <div class="grid grid-cols-7 gap-10">
    <div>Mon</div>
    <div>Tue</div>
    <div>Wed</div>
    <div>Thu</div>
    <div>Fri</div>
    <div>Sat</div>
    <div>Sun</div>
    <div v-for="day in days" :key="day">
      {{ day }}
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      month: 4,
      year: 2022,
    };
  },
  computed: {
    days() {
      let date = new Date(this.year, this.month, 1);
      let days = [];
      while (date.getMonth() === this.month) {
        days.push(new Date(date).getDate());
        date.setDate(date.getDate() + 1);
      }
      return days;
    },
  },
};
</script>
