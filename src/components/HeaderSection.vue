<template>
  <header class="bg-black text-white w-full flex-wrap items-center">
    <div class="flex items-center justify-between px-3 sm:px-6 py-3 gap-3">

      <!-- Logo -->
      <div class="p-1 cursor-pointer">
        <img src="/images/flag.png" alt="logo" class="w-20 sm:w-28 object-contain" />
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
      <div class="flex flex-1 max-w-xl">
        <select
          class="bg-gray-200 text-black px-2 text-xs sm:text-sm rounded-l-lg outline-none">
          <option value="All">All</option>
          <option value="Clothes">Clothes</option>
          <option value="Shoes">Shoes</option>
          <option value="Dress">Dress</option>
          <option value="Electronics">Electronics</option>
          <option value="Plastic">Plastic Brand</option>
        </select>

        <input
          class="flex-1 h-9 sm:h-10 text-black indent-2 bg-white outline-none"
          type="text"
          placeholder="Search Amazora"
        />

        <button class="bg-yellow-500 w-10 sm:w-14 h-9 sm:h-10 rounded-r-lg flex items-center justify-center hover:bg-yellow-600">
          <i class="fa-solid fa-magnifying-glass text-black"></i>
        </button>
      </div>

      <!-- Login / Profile -->
      <div v-if="userEmailvalue.length > 0"
        @click="mode='profile'"
        class="hidden md:block hover:border border-white p-1 cursor-pointer leading-tight">
        <span class="text-xs">{{ userEmailvalue }}</span>
      </div>

      <div v-else
        @click="mode='signuppage'"
        class="hidden md:block hover:border border-white p-1 cursor-pointer leading-tight">
        <span class="text-sm">
          <i class="fa-regular fa-user"></i> Login / Sign Up
        </span><br>
        <strong class="text-sm">Account</strong>
      </div>

      <!-- Orders -->
      <div class="hidden md:block hover:border border-white p-1 cursor-pointer leading-tight">
        <span class="text-xs">Returns</span><br>
        <strong class="text-sm">Orders</strong>
      </div>

      <!-- Cart -->
      <div @click="mode='cart'" class="hover:border border-white p-1 cursor-pointer flex items-center">
        <i class="fa-solid fa-cart-shopping text-xl"></i>
        <span class="hidden sm:block ml-1 text-sm">Cart</span>
      </div>

    </div>
  </header>

  <!-- Mini menu -->
  <div class="listsHeader text-xs flex bg-gray-300 h-9 items-center gap-3 border-b border-black font-400 md:text-sm">
    <span>
      <button @click="mode='SidebarOpen'" class="ml-2 px-1 py-1 bg-gray-200 hover:bg-gray-300 rounded">
        <i class="fa-solid fa-bars"></i> All
      </button>
    </span>

    <span>
      <button @click="mode='aboutAmazora'" class="ml-2 px-1 py-1 bg-gray-200 hover:bg-gray-300 rounded">
        About Amazora
      </button>
    </span>

    <span v-for="value in SmallBar" :key="value">{{ value }}</span>
  </div>

  <!-- Login Popup -->
  <div v-if="mode==='showpage'" class="fixed inset-0 backdrop-blur-sm bg-black/30 flex justify-center items-center z-50">
    <form class="bg-white p-8 rounded-lg shadow-md max-w-sm w-full">

      <h1 class="text-2xl font-bold text-gray-800 text-center mb-6">Welcome back to <br> Amazora</h1>

      <label class="block text-gray-700">Email</label>
      <input type="email" v-model="UserEmail" placeholder="Enter Email"
        class="w-full p-3 border border-gray-300 rounded-md mb-4 focus:ring-2 focus:ring-yellow-400" required>

      <label class="block text-gray-700">Password</label>
      <input type="password" v-model="UserPassword" placeholder="Enter Password"
        class="w-full p-3 border border-gray-300 rounded-md mb-6 focus:ring-2 focus:ring-yellow-400" required>

      <button @click="saveData" type="button"
        class="w-full bg-yellow-500 text-white py-3 rounded-md text-lg hover:bg-yellow-600 transition">Login</button>

      <p class="text-center text-gray-600 mt-4">
        Don't have an account?
        <a @click="mode='signuppage'" class="text-yellow-600 cursor-pointer">Sign Up</a>
      </p>

      <a @click="mode=null" class="block mt-4 text-center text-red-500 cursor-pointer">Close</a>
    </form>
  </div>

  <!-- Sign Up Popup -->
  <div v-if="mode==='signuppage'" class="fixed inset-0 backdrop-blur-sm bg-black/30 flex justify-center items-center z-50">
    <form class="bg-white p-8 rounded-lg shadow-md max-w-sm w-full">

      <h1 class="text-2xl font-bold text-gray-800 text-center mb-6">Welcome to Amazora</h1>

      <label class="block text-gray-700">Full Name</label>
      <input type="text" v-model="name" placeholder="Enter Full Name"
        class="w-full p-3 border border-gray-300 rounded-md mb-4" required>

      <label class="block text-gray-700">Email</label>
      <input type="email" v-model="UserEmail" placeholder="Enter Email"
        class="w-full p-3 border border-gray-300 rounded-md mb-4">

      <label class="block text-gray-700">Password</label>
      <input type="password" v-model="UserPassword" placeholder="Enter Password"
        class="w-full p-3 border border-gray-300 rounded-md mb-6" required>

      <button @click="saveData" type="button"
        class="w-full bg-yellow-500 text-white py-3 rounded-md text-lg hover:bg-yellow-600 transition">Sign Up</button>

      <p class="text-center text-gray-600 mt-4">
        Already have an account?
        <a @click="mode='showpage'" class="text-yellow-600 cursor-pointer">Login</a>
      </p>

      <a @click="mode=null" class="block mt-4 text-center text-red-500 cursor-pointer">Close</a>
    </form>
  </div>

  <!-- Cart Popup -->
  <div v-if="mode==='cart'" class="fixed inset-0 backdrop-blur-sm bg-black/30 flex justify-center items-center z-50">
    <div class="bg-white text-center p-8 h-80 w-full rounded-lg shadow-md max-w-sm">
      <h1 class="font-bold">Your Cart Items – 0</h1><br>
      <a @click="mode=null" class="block text-center mt-46 text-red-500 cursor-pointer">Close</a>
    </div>
  </div>

  <!-- Profile Popup -->
  <div v-if="mode==='profile'" class="fixed inset-0 backdrop-blur-sm bg-black/30 flex justify-center items-center z-50">
    <div class="bg-white text-center p-8 h-60 w-full rounded-lg shadow-md max-w-sm">
      <h1 class="font-bold">Profile</h1><br>
      <span class="text-sm">{{ userEmailvalue }}</span><br><br>

      <button @click="logout"
        class="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-md font-semibold transition mb-4">Logout</button>

      <a @click="mode=null" class="block text-center mt-6 text-red-500 cursor-pointer">Close</a>
    </div>
  </div>

  <!-- About Amazora Popup -->
  <div v-if="mode==='aboutAmazora'" class="fixed inset-0 backdrop-blur-sm bg-black/40 flex justify-center items-center z-50">
    <div class="bg-white w-full max-w-2xl p-6 rounded-lg shadow-lg">

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div>
          <h1 class="font-bold text-2xl mb-3">About Amazora</h1>

          <p class="text-gray-700 leading-relaxed text-sm">
            Amazora is a modern online shopping platform offering high-quality
            products at affordable prices. Our website is fast, secure, and
            user-friendly, making online shopping simple for everyone.
          </p>

          <p class="text-gray-700 leading-relaxed text-sm mt-2">
            We provide fast delivery, verified sellers, and reliable customer
            support. Our mission is to make online shopping easy, smooth, and
            enjoyable across Pakistan.
          </p>
        </div>

        <div class="flex justify-center items-center">
          <img src="/images/owner.jpeg" alt="owner"
            class="rounded-xl w-48 h-48 object-cover shadow" />
        </div>
      </div>

      <div class="text-center mt-6">
        <a @click="mode=null" class="text-red-500 cursor-pointer font-bold">Close</a>
      </div>
    </div>
  </div>
<!-- Sidebar Overlay -->
 <Transition name="slide">
<div
  v-if="mode==='SidebarOpen'"
  class="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 flex"
 
  @click="closeSidebar"
>

  <!-- Sidebar Panel -->
  <div
    class="bg-white w-72 sm:w-80 md:w-96 max-w-full h-full shadow-xl overflow-y-auto "

    @click.stop
  >
  
    <!-- User Section -->
    <div class="bg-black text-white h-16 flex justify-center items-center">
      <span v-if="userEmailvalue.length > 0" class="text-md font-bold">
        {{ userEmailvalue }}
      </span>
      <span v-else @click="mode='signuppage'" class="text-xl font-bold cursor-pointer">
        <i class="fa-regular fa-user"></i> Login / Sign Up
      </span>
    </div>

    <!-- Sidebar List -->
    <div class="p-4">
      <div v-for="section in sidebarSections" :key="section.title" class="mb-4">
        
        <h1 class="text-xl font-semibold mb-2">{{ section.title }}</h1>

        <div class="space-y-1">
          <span
            v-for="item in section.items"
            :key="item"
            class="block text-lg font-serif px-3 py-2 rounded cursor-pointer hover:bg-gray-200 active:bg-gray-300 transition"
          >
            {{ item }}
          </span>
        </div>

        <hr class="my-3" />
      </div>
    </div>
  </div>

  <!-- Close Button -->
  <button
    @click="mode=null"
    class="text-white border-2 rounded-lg px-1  text-4xl absolute top-3 left-[310px] hover:cursor-pointer"
  >
    ×
  </button>
</div>
</Transition>

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
  const password = UserPassword.value.trim();

  if (!email || !password) {
    alert("Please fill all fields!");
    return;
  }

  localStorage.setItem("UserEmail", email);
  localStorage.setItem("UserPassword", password);

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
  {
    title: "Digital Content & Devices",
    items: ["Prime Video", "Amazora Music", "Amazora AppStore"]
  },
  {
    title: "Shop by Category",
    items: ["Mobiles", "Electronics", "Home Appliances"]
  },
  {
    title: "Programs & Features",
    items: ["Today's Deals", "Gift Cards", "Customer Service"]
  },
  {
    title: "Help & Settings",
    items: ["Your Account", "Orders", "Language Settings"]
  }
];
</script>


