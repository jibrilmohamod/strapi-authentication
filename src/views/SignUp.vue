<template>
  <div class="bg-[#C5DAF8] rounded-md h-[100vh] flex">
    <!-- Sign Up Form  -->
    <form
      @submit.prevent=""
      class="w-full p-6 flex flex-col m-auto justify-center gap-6"
      id="signIn"
    >
      <!-- form label  -->
      <div
        class="border px-5 py-3 flex flex-col gap-1 bg-[#E5F0FF] rounded-md shadow shadow-gray-500"
      >
        <h1 class="text-lg font-semibold text-[#4267B2]">Sign Up</h1>
        <p class="text-sm">
          Already have an account?
          <router-link to="/signIn" class="font-semibold underline decoration-[#4267B2]"
            >Sign In</router-link
          >
        </p>
        <!-- error message  -->
        <div v-if="auth.errorMsg" class="text-red-500 text-sm">
          {{ auth.errorMsg }}
        </div>
      </div>

      <!-- user name input -->
      <div class="border p-5 bg-[#E5F0FF] rounded-md shadow shadow-gray-500">
        <div class="flex gap-1 border-b border-black pb-1">
          <label for="name" class="flex justify-center items-center text-lg mr-1"
            ><Icon icon="eva:person-outline" class="text-[#4267B2] text-xl" />
          </label>
          <input
            type="text"
            name="name"
            id="name"
            class="bg-[#E5F0FF] w-full placeholder:text-sm focus:outline-none text-sm"
            required
            placeholder="Your UserName"
            v-model="auth.username"
          />
        </div>
      </div>

      <!-- email input -->
      <div class="border p-5 bg-[#E5F0FF] rounded-md shadow shadow-gray-500">
        <div class="flex gap-1 border-b border-black pb-1">
          <label for="email" class="flex justify-center items-center text-lg mr-1"
            ><Icon icon="eva:email-outline" class="text-[#4267B2] text-xl" />
          </label>
          <input
            v-model="auth.email"
            type="email"
            name="email"
            id="email"
            class="bg-[#E5F0FF] w-full placeholder:text-sm focus:outline-none text-sm"
            required
            placeholder="Enter your email"
          />
        </div>
      </div>

      <!-- password input -->
      <div class="p-5 bg-[#E5F0FF] rounded-md shadow shadow-gray-500">
        <div class="flex gap-1 border-b border-black pb-1">
          <label for="password" class="flex justify-center items-center text-lg mr-1"
            ><Icon icon="eva:lock-outline" class="text-[#4267B2] text-xl"
          /></label>
          <input
            v-if="show1"
            type="password"
            name="password"
            id="password"
            class="bg-[#E5F0FF] w-full placeholder:text-sm focus:outline-none text-sm"
            required
            placeholder="Enter your password"
            v-model="auth.password"
          />
          <input
            v-else
            type="text"
            name="password"
            id="password"
            class="bg-[#E5F0FF] w-full placeholder:text-sm focus:outline-none text-sm"
            required
            placeholder="Enter your password"
            v-model="auth.password"
          />
          <!-- eye icon -->
          <div class="flex justify-end items-center">
            <Icon
              @click="showPassword1()"
              v-if="show1"
              icon="eva:eye-outline"
              class="text-[#4267B2] text-xl"
            />
            <!-- show password -->
            <Icon
              @click="showPassword1()"
              v-else
              icon="eva:eye-off-outline"
              class="text-[#4267B2] text-xl"
            />
          </div>
        </div>
      </div>

      <!-- confirm password input -->
      <div class="p-5 bg-[#E5F0FF] rounded-md shadow shadow-gray-500">
        <div class="flex gap-1 border-b border-black pb-1">
          <label
            for="confirmPassword"
            class="flex justify-center items-center text-lg mr-1"
            ><Icon icon="eva:lock-outline" class="text-[#4267B2] text-xl"
          /></label>
          <input
            v-if="show2"
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            class="bg-[#E5F0FF] w-full placeholder:text-sm focus:outline-none text-sm"
            required
            placeholder="Confirm your password"
            v-model="auth.conf"
          />
          <input
            v-else
            type="text"
            name="confirmPassword"
            id="confirmPassword"
            class="bg-[#E5F0FF] w-full placeholder:text-sm focus:outline-none text-sm"
            required
            placeholder="Confirm your password"
            v-model="auth.conf"
          />
          <!-- eye icon -->
          <div class="flex justify-end items-center">
            <Icon
              @click="showPassword2()"
              v-if="show2"
              icon="eva:eye-outline"
              class="text-[#4267B2] text-xl"
            />
            <!-- show password -->
            <Icon
              @click="showPassword2()"
              v-else
              icon="eva:eye-off-outline"
              class="text-[#4267B2] text-xl"
            />
          </div>
        </div>
      </div>

      <!-- agree to terms and conditions -->
      <div class="flex items-center gap-2">
        <input
          type="checkbox"
          name="agree"
          id="agree"
          required
          class="focus:outline-none"
        />
        <label for="agree" class="text-sm"
          >I agree to the
          <router-link to="" class="underline decoration-[#4267B2]">
            Terms and Conditions</router-link
          >
        </label>
      </div>

      <!-- sign in button -->
      <div class="flex justify-center">
        <button
          type="submit"
          class="bg-[#4267B2] text-white text-lg rounded-md px-6 py-2"
          @click="register()"
        >
          Sign In
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useAuth } from "../stores/AuthStore";
const auth = useAuth();

const show1 = ref(true);
//show password 1
const showPassword1 = () => {
  show1.value = !show1.value;
};
const show2 = ref(true);
//show password 2
const showPassword2 = () => {
  show2.value = !show2.value;
};

const register = async () => {
  await auth.register();
};
</script>

<style scoped></style>
