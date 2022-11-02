import { defineStore } from "pinia"
import { ref } from "vue"

export const useCartStore = defineStore("cart", {
 state: () => ({
  cart: ref([]),
  loading: ref(false),
  error: ref(null),
  count: ref(0),
 }),
 getters: {
  cartCount() {
   return this.cart.length
  },
 },
 actions: {
  async addToCart(count, product) {
   for (let i = 0; i < count; i++) {
    this.cart.push({ ...product })
    this.count = 0
   }
  },
  increment() {
   this.count++
  },
  decrement() {
   this.count--
  },
 },
})
