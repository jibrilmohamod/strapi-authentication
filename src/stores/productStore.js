import { defineStore } from "pinia"
import { ref } from "vue"
import axios from "axios"
export const useProductStore = defineStore("productStore", {
 state: () => ({
  products: ref([]),
  isLoading: ref(false),
 }),
 getters: {
  getAll() {},
 },
 actions: {
  fetchAll: async () => {
   await axios
    .get("https://api.escuelajs.co/api/v1/products?offset=0&limit=10")
    .then((response) => {
     this.products = response.data
    })
  },
 },
})
