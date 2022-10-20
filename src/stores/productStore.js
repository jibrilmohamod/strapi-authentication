import { defineStore } from "pinia"
import { ref } from "vue"
import strapi from "../strapi/strapi"

export const useProductStore = defineStore("product", {
 state: () => ({
  products: ref([]),
  product: ref({}),
  loading: ref(false),
  error: ref(null),
 }),
 actions: {
  async getProducts() {
   await strapi
    .find("products", {
     pagination: {
      start: 0,
      limit: 10,
     },
    })
    .then((response) => {
     this.products = response.data
    })
  },
 },
})
