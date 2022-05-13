<template>
  <div class="add-resource">
    <h2 class="is-size-3 has-text-centered pt-6">Add New Resource</h2>
    <add-edit-resource-vue v-model="newResource">
      <template #buttons>
        <div class="control">
          <button class="button is-link" @click.prevent="addNew(newResource)">Submit</button>
        </div>
        <div class="control">
          <router-link class="button is-link is-light" to="/">Cancel</router-link>
        </div>
      </template>
    </add-edit-resource-vue>
  </div>

  <!-- <div class="container">
    <form class="form-control my-6 mx-auto">
      <div class="field">
        <label class="label">Title</label>
        <div class="control">
          <input class="input" type="text" placeholder="Title" v-model="newResource.title" />
        </div>
      </div>

      <div class="field">
        <label class="label">Description</label>
        <div class="control">
          <textarea
            class="textarea"
            placeholder="Description"
            v-model="newResource.content"
          ></textarea>
        </div>
      </div>

      <div class="field">
        <label class="label">Link to Resource</label>
        <div class="control">
          <input
            class="input"
            type="url"
            placeholder="Link to Resource"
            v-model="newResource.link"
          />
        </div>
      </div>

      <div class="field is-grouped">
        <div class="control">
          <button class="button is-link" @click.prevent="addNew(newResource)">Submit</button>
        </div>
        <div class="control">
          <router-link class="button is-link is-light" to="/">Cancel</router-link>
        </div>
      </div>
    </form>
  </div> -->
</template>

<script setup>
/*
  IMPORTS
*/
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useResourcesStore } from "@/stores/resources";
import AddEditResourceVue from "../Resources/AddEditResource.vue";

/*
  Router
*/
const router = useRouter();

/*
  store
*/
const storeResources = useResourcesStore();

/*
  resource
*/
const newResource = ref({
  title: "",
  content: "",
  link: "",
});

const addNew = (newResource) => {
  storeResources.addResource(newResource);

  router.push({ path: "/" });
};
</script>

<style>
.form-control {
  max-width: 40rem;
}

.field {
  margin-left: 2rem;
  margin-right: 2rem;
}
</style>
