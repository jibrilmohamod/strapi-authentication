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
         await 
  },
 },
})
