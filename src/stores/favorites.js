import { defineStore } from "pinia";
import { storeData, getData } from "../firebase";

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useFavorites = defineStore("favorites", {
  state: () => ({
    favoriteFilms: [],
  }),
  actions: {
    add(film) {
      this.favoriteFilms.push(film);
      // guardar a Firebase
      storeData("favorites", this.favoriteFilms);
    },
    async get() {
      // obtener de Firebase
      this.favoriteFilms = await getData("favorites");
    },
  },
});
