<template>
  <div class="relative">
    <div class="absolute top-0 left-0 py-2 px-4 bg-white bg-opacity-50">
      <p class="text-xs leading-3 text-gray-800">New</p>
    </div>
    <div class="relative group">
      <div
        class="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"
      ></div>
      <img class="w-full" :src="image" alt="A girl Posing Image" />

      <div class="absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
        <button
          class="font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full"
          @click="addToCart(count, product)"
        >
          Add to cart
        </button>
        <button
          class="bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white"
        >
          Quick View
        </button>
      </div>
    </div>
    <p class="font-normal text-xl leading-5 text-gray-800 md:mt-6 mt-4">
      {{ title }}
    </p>
    <p class="font-semibold text-xl leading-5 text-gray-800 mt-4">
      {{ `$${price}` }}
    </p>
    <p class="font-normal text-base leading-4 text-gray-600 mt-4">
      <!-- product count -->
      <button>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 13H5"
            stroke="#1F2937"
            stroke-miterlimit="10"
            t-noke-linecap="round"
          />
          <path
            d="M12 20V4"
            stroke="#1F2937"
            stroke-miterlimit="10"
            stroke-linecap="round"
          />
        </svg>
      </button>
      <span class="mx-2 text-lg">0</span>
      <button>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 13H5"
            stroke="#1F2937"
            stroke-miterlimit="10"
            stroke-linecap="round"
          />
        </svg>
      </button>
    </p>
  </div>
</template>

<script setup>
defineProps({
  // props go here
  title: String,
  price: Number,
  image: String,
  count: Number,
});
</script>

<style scoped></style>
