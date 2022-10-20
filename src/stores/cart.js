import { defineStore } from "pinia"
import { ref } from "vue"

export const useCartStore = defineStore("cart", {
 state: () => ({
  cart: ref([]),
  loading: ref(false),
  error: ref(null),
 }),
 actions: {
  async addToCart(product) {
   this.cart.push(product)
  },
 },
})
