import { defineStore } from "pinia"
import { ref } from "vue"
import strapi from "../strapi/strapi"
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
   await strapi.find("products", {
    pagination: {
     page: 1,
     limit: 10,
    },
   })
  },
 },
})
