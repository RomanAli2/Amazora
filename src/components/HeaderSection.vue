<template>

  <!-- HEADER -->
  <header class="bg-black text-white w-full">
    <div class="flex items-center justify-between px-3 sm:px-6 py-3 gap-3">

      <!-- Logo -->
      <div class="p-1 cursor-pointer shrink-0 ">
        <img src="/images/flag.png" alt="logo" class="w-16 sm:w-24 object-contain" />
      </div>

      <!-- Location -->
      <div class="hidden md:block hover:border border-white p-1 cursor-pointer leading-tight">
        <span class="text-xs text-gray-300">Delivering to Fargus Falls 52</span><br>
        <strong class="text-sm">
          <i class="fa-solid fa-location-dot text-yellow-400"></i>
          Update location
        </strong>
      </div>

      <!-- Search Bar -->
      <div class="flex flex-1 max-w-xl w-full">
        <select class="bg-gray-200 text-black px-2 text-xs sm:text-sm rounded-l-lg outline-none w-20 sm:w-28">
          <option>All</option>
          <option>Clothes</option>
          <option>Shoes</option>
          <option>Electronics</option>
        </select>

        <input
          class="flex-1 h-9 sm:h-10 text-black indent-2 bg-white outline-none"
          placeholder="Search Amazora" />

        <button class="bg-yellow-500 w-10 sm:w-14 h-9 sm:h-10 rounded-r-lg flex items-center justify-center hover:bg-yellow-600">
          <i class="fa-solid fa-magnifying-glass text-black"></i>
        </button>
      </div>

      <!-- Profile -->
      <div v-if="userEmailvalue.length > 0"
        @click="mode='profile'"
        class="hidden lg:block hover:border border-white p-1 cursor-pointer leading-tight">
        <span class="text-xs">{{ userEmailvalue }}</span>
      </div>

      <div v-else
        @click="mode='signuppage'"
        class="hidden lg:block hover:border border-white p-1 cursor-pointer leading-tight">
        <span class="text-sm"><i class="fa-regular fa-user"></i> Login</span>
      </div>

      <!-- Orders -->
      <div class="hidden lg:block hover:border border-white p-1 cursor-pointer leading-tight">
        <span class="text-xs">Returns</span><br>
        <strong class="text-sm">Orders</strong>
      </div>

      <!-- Cart -->
      <div @click="mode='cart'" class="hover:border border-white p-1 cursor-pointer flex items-center shrink-0">
        <i class="fa-solid fa-cart-shopping text-xl"></i>
        <span class="hidden sm:block ml-1 text-sm">Cart</span>
      </div>

    </div>
  </header>

  <!-- MINI MENU -->
  <div class="text-xs md:text-sm flex bg-gray-300 h-9 items-center gap-3 border-b border-black overflow-x-auto whitespace-nowrap">
    <button @click="mode='SidebarOpen'" class="ml-2 px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded shrink-0">
      <i class="fa-solid fa-bars"></i> All
    </button>

    <button @click="mode='aboutAmazora'" class="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded shrink-0">
      About Amazora
    </button>

    <span v-for="value in SmallBar" :key="value" class="shrink-0 px-1">
      {{ value }}
    </span>
  </div>

  <!-- LOGIN POPUP -->
  <div v-if="mode==='showpage'" class="fixed inset-0 backdrop-blur-sm bg-black/30 flex justify-center items-center z-50">
    <form class="bg-white p-8 rounded-lg shadow-md max-w-sm w-full">
      <h1 class="text-2xl font-bold text-gray-800 text-center mb-6">Welcome back to Amazora</h1>

      <label class="block text-gray-700">Email</label>
      <input v-model="UserEmail" type="email" placeholder="Enter Email"
        class="w-full p-3 border border-gray-300 rounded-md mb-4">

      <label class="block text-gray-700">Password</label>
      <input v-model="UserPassword" type="password" placeholder="Enter Password"
        class="w-full p-3 border border-gray-300 rounded-md mb-6">

      <button @click="saveData" type="button"
        class="w-full bg-yellow-500 text-white py-3 rounded-md text-lg hover:bg-yellow-600">Login</button>

      <p class="text-center text-gray-600 mt-4">
        Don't have an account?
        <a @click="mode='signuppage'" class="text-yellow-600 cursor-pointer">Sign Up</a>
      </p>

      <a @click="mode=null" class="block mt-4 text-center text-red-500 cursor-pointer">Close</a>
    </form>
  </div>

  <!-- SIGN UP POPUP -->
  <div v-if="mode==='signuppage'" class="fixed inset-0 backdrop-blur-sm bg-black/30 flex justify-center items-center z-50">
    <form class="bg-white p-8 rounded-lg shadow-md max-w-sm w-full">
      <h1 class="text-2xl font-bold text-gray-800 text-center mb-6">Create Your Amazora Account</h1>

      <label class="block text-gray-700">Full Name</label>
      <input v-model="name" type="text" placeholder="Enter Full Name"
        class="w-full p-3 border border-gray-300 rounded-md mb-4">

      <label class="block text-gray-700">Email</label>
      <input v-model="UserEmail" type="email" placeholder="Enter Email"
        class="w-full p-3 border border-gray-300 rounded-md mb-4">

      <label class="block text-gray-700">Password</label>
      <input v-model="UserPassword" type="password" placeholder="Enter Password"
        class="w-full p-3 border border-gray-300 rounded-md mb-6">

      <button @click="saveData" type="button"
        class="w-full bg-yellow-500 text-white py-3 rounded-md text-lg hover:bg-yellow-600">Sign Up</button>

      <p class="text-center text-gray-600 mt-4">
        Already have an account?
        <a @click="mode='showpage'" class="text-yellow-600 cursor-pointer">Login</a>
      </p>

      <a @click="mode=null" class="block mt-4 text-center text-red-500 cursor-pointer">Close</a>
    </form>
  </div>

  <!-- CART -->
  <div v-if="mode==='cart'" class="fixed inset-0 backdrop-blur-sm bg-black/30 flex justify-center items-center z-50">
    <div class="bg-white text-center p-8 h-80 w-full rounded-lg shadow-md max-w-sm">
      <h1 class="font-bold">Your Cart Items – 0</h1><br>
      <a @click="mode=null" class="block mt-40 text-red-500 cursor-pointer">Close</a>
    </div>
  </div>

  <!-- PROFILE -->
  <div v-if="mode==='profile'" class="fixed inset-0 backdrop-blur-sm bg-black/30 flex justify-center items-center z-50">
    <div class="bg-white text-center p-8 h-60 w-full rounded-lg shadow-md max-w-sm">
      <h1 class="font-bold">Profile</h1><br>
      <span class="text-sm">{{ userEmailvalue }}</span><br><br>

      <button @click="logout"
        class="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-md font-semibold mb-4">Logout</button>

      <a @click="mode=null" class="block mt-6 text-red-500 cursor-pointer">Close</a>
    </div>
  </div>

  <!-- ABOUT AMAZORA -->
  <div v-if="mode==='aboutAmazora'" class="fixed inset-0 backdrop-blur-sm bg-black/40 flex justify-center items-center z-50">
    <div class="bg-white w-full max-w-2xl p-6 rounded-lg shadow-lg">

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div>
          <h1 class="font-bold text-2xl mb-3">About Amazora</h1>

          <p class="text-gray-700 text-sm leading-relaxed">
            Amazora is a modern online shopping platform offering high-quality
            products at affordable prices.
          </p>

          <p class="text-gray-700 text-sm leading-relaxed mt-2">
            Fast delivery, verified sellers & reliable support across Pakistan.
          </p>
        </div>

        <div class="flex justify-center items-center">
          <img src="/images/owner.jpeg" class="rounded-xl w-48 h-48 object-cover shadow" />
        </div>
      </div>

      <div class="text-center mt-6">
        <a @click="mode=null" class="text-red-500 cursor-pointer font-bold">Close</a>
      </div>
    </div>
  </div>

  <!-- SIDEBAR -->
  <div v-if="mode==='SidebarOpen'" class="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex">

    <div class="bg-white h-full shadow-xl overflow-y-auto 
                w-72 sm:w-80 md:w-[400px] lg:w-[420px]">

      <div class="bg-black text-white h-16 flex justify-center items-center">
        <span v-if="userEmailvalue.length > 0" class="text-md font-bold">
          {{ userEmailvalue }}
        </span>
        <span v-else @click="mode='signuppage'" class="text-xl font-bold cursor-pointer">
          <i class="fa-regular fa-user"></i> Login / Sign Up
        </span>
      </div>

      <div class="p-4">
        <div v-for="section in sidebarSections" :key="section.title" class="mb-4">

          <h1 class="text-lg font-semibold mb-2">{{ section.title }}</h1>

          <div class="space-y-1">
            <span v-for="item in section.items" :key="item"
              class="block text-base px-3 py-2 rounded cursor-pointer hover:bg-gray-200 active:bg-gray-300">
              {{ item }}
            </span>
          </div>

          <hr class="my-3" />
        </div>
      </div>

    </div>

    <button @click="mode=null"
      class="text-white text-4xl absolute top-3 right-4">×</button>

  </div>

</template>



<script setup>
import { ref } from "vue";

const mode = ref(null);
const UserEmail = ref("");
const UserPassword = ref("");
const name = ref("");

const userEmailvalue = ref(localStorage.getItem("UserEmail") || "");

function saveData() {
  const email = UserEmail.value.trim();
  const pass = UserPassword.value.trim();

  if (!email || !pass) {
    alert("Please fill all fields!");
    return;
  }

  localStorage.setItem("UserEmail", email);
  localStorage.setItem("UserPassword", pass);

  userEmailvalue.value = email;
  UserEmail.value = "";
  UserPassword.value = "";
  name.value = "";

  mode.value = null;
}

function logout() {
  localStorage.removeItem("UserEmail");
  localStorage.removeItem("UserPassword");
  userEmailvalue.value = "";
  mode.value = null;
}

const props = defineProps({
  SmallBar: {
    type: Array,
    default: () => ["Today's Deals", "Gift Cards", "Customer Service", "Sell"]
  }
});

const sidebarSections = [
  { title: "Digital Content", items: ["Prime Video", "Amazora Music", "Amazora AppStore"] },
  { title: "Shop by Category", items: ["Mobiles", "Electronics", "Home Appliances"] },
  { title: "Programs", items: ["Today's Deals", "Gift Cards", "Customer Service"] },
  { title: "Settings", items: ["Your Account", "Orders", "Language Settings"] }
];
</script>
