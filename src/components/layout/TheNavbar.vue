<template>
  <nav class="has-background-black" role="navigation" aria-label="main navigation">
    <div class="py-4">
      <div class="buttons">
        <router-link to="/" class="button is-dark mr-3" active-class="is-active"
          >Stored Resource</router-link
        >
        <router-link to="/addNew" class="button is-dark ml-3" active-class="is-active"
          >Add Resource</router-link
        >
      </div>
    </div>
  </nav>
</template>

<style scoped>
.buttons {
  justify-content: center;
}
</style>
