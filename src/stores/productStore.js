import { defineStore } from "pinia"
import { ref } from "vue"
import strapi from "../strapi/strapi"
import axios from "axios"

export const useProductStore = defineStore("product", {
 state: () => ({
  products: ref([]),
  product: ref({}),
  loading: ref(false),
  error: ref(null),
 }),
 actions: {
  async getProducts() {
   await strapi.request("get", "/products").then((response) => {
    this.products = response.data
   })
  },
 },
})
