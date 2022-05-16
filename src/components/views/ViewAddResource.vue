<template>
  <div class="add-resource">
    <h2 class="is-size-3 has-text-centered pt-6">Add New Resource</h2>
    <add-edit-resource-vue v-model="newResource">
      <template #buttons>
        <div class="control">
          <button class="button is-link" @click.prevent="addNew(newResource)">Submit</button>
        </div>
        <div class="control">
          <button class="button is-link is-light" @click.prevent="cancelAdd">Cancel</button>
        </div>
      </template>
    </add-edit-resource-vue>

    <transition name="modal">
      <modal-vue
        v-if="modals.statusModal"
        v-model="modals.statusModal"
        modalAction="confirm"
        title="Discard changes?"
      >
      </modal-vue>
    </transition>
  </div>
</template>

<script setup>
/*
  IMPORTS
*/
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import { useResourcesStore } from "@/stores/resources";
import ModalVue from "../Resources/Modal.vue";
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
  Modal
*/
const modals = reactive({
  statusModal: false,
});

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

/*
  Cancel button
*/
const cancelAdd = () => {
  if (
    newResource.value.title.length > 0 ||
    newResource.value.content.length > 0 ||
    newResource.value.link.length > 0
  ) {
    return (modals.statusModal = true);
  }

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

.modal-enter-active,
.modal-leave-active,
.resource-list-move,
.resource-list-enter-active,
.resource-list-leave-active {
  transition: all 0.5s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
