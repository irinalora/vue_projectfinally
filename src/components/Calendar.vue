<template>
  calendar
  <div v-for="day in days" :key="day">
    <div>{{ day }}</div>
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
        days.push(new Date(date));
        date.setDate(date.getDate() + 1);
      }
      return days;
    },
  },
};
</script>
