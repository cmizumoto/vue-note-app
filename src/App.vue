<template>
  <the-header></the-header>
  <the-navbar></the-navbar>

  <router-view v-slot="{ Component, route }">
    <transition name="route" mode="out-in">
      <div :key="route.fullPath">
        <component :is="Component"></component>
      </div>
    </transition>
  </router-view>
</template>

<script setup>
/*
  IMPORTS
*/
import TheHeader from "./components/layout/TheHeader.vue";
import TheNavbar from "./components/layout/TheNavbar.vue";

/*
  Router
*/
</script>

<style>
@import "bulma/css/bulma.min.css";

/*
Route Transition
*/
.route-enter-from {
  opacity: 0;
  transform: translateX(-4rem);
}
.route-leave-to {
  opacity: 0;
  transform: translateX(4rem);
}
.route-enter-active {
  transition: all 0.3s ease-out;
}
.route-leave-active {
  transition: all 0.3s ease-in;
}
</style>
