<template>
  <div class="bg-[#C5DAF8] rounded-md h-[90vh] flex">
    <!-- Sign in Form  -->
    <form
      @submit.prevent=""
      class="w-full p-6 flex flex-col gap-10 m-auto justify-center"
      id="signIn"
    >
      <!-- form label  -->
      <div
        class="border p-5 flex flex-col gap-1 bg-[#E5F0FF] rounded-md shadow shadow-gray-500 mb-3"
      >
        <h1 class="text-xl font-semibold text-[#4267B2]">Sign In</h1>
        <p class="text-sm">
          Don't have an account?
          <router-link to="/signUp" class="font-semibold underline decoration-[#4267B2]"
            >Sign Up</router-link
          >
        </p>
        <!-- error message -->
        <div v-if="auth.errorMsg" class="text-red-500 text-sm">
          {{ auth.errorMsg }}
        </div>
      </div>

      <!-- email input -->
      <div class="border p-5 bg-[#E5F0FF] rounded-md shadow shadow-gray-500">
        <div class="flex gap-1 border-b border-black pb-1">
          <label for="email" class="flex justify-center items-center text-lg mr-1"
            ><Icon icon="eva:email-outline" class="text-[#4267B2] text-xl" />
          </label>
          <input
            type="email"
            name="email"
            id="email"
            class="bg-[#E5F0FF] w-full placeholder:text-sm focus:outline-none text-sm"
            required
            placeholder="Enter your email"
            v-model="auth.email"
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
            v-if="show"
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
              @click="showPassword"
              v-if="show"
              icon="eva:eye-outline"
              class="text-[#4267B2] text-xl"
            />
            <!-- show password -->
            <Icon
              @click="showPassword"
              v-else
              icon="eva:eye-off-outline"
              class="text-[#4267B2] text-xl"
            />
          </div>
        </div>
      </div>

      <!-- remember me checkbox and forgot password link -->
      <div class="flex justify-between items-center">
        <div class="flex items-center gap-2">
          <input type="checkbox" id="remember" />
          <label for="remember" class="text-sm">Remember me</label>
        </div>
        <button class="flex items-center gap-2">
          <p class="text-sm underline decoration-[#4267B2]">Forgot password?</p>
        </button>
      </div>

      <!-- sign in button -->
      <div class="flex justify-center">
        <button
          type="submit"
          class="bg-[#4267B2] text-white text-lg rounded-md px-6 py-2"
          @click="login()"
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
const show = ref(true);
//show password
const showPassword = () => {
  show.value = !show.value;
};
const login = async () => {
  auth.login();
};
</script>

<style scoped></style>
