<template>
  <div class="edit-resource">
    <h2 class="is-size-3 has-text-centered pt-6">Edit Resource</h2>
    <add-edit-resource-vue v-model="newResource">
      <template #buttons>
        <div class="control">
          <button class="button is-link" @click.prevent="acceptEdit">Save changes</button>
        </div>
        <div class="control">
          <button class="button is-link is-light" @click.prevent="cancelEdit">Cancel</button>
        </div>
      </template>
    </add-edit-resource-vue>
    <transition name="modal">
      <modal-vue
        v-if="modals.statusModal"
        v-model="modals.statusModal"
        modalAction="edit"
        title="Discard Changed Made To Resource?"
        :resourceObj="filteredResource[0]"
        :resourceId="route.params.id"
      ></modal-vue>
    </transition>
  </div>
</template>

<script setup>
/*
  IMPORTS
*/
import { ref, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useResourcesStore } from "@/stores/resources";
import AddEditResourceVue from "../Resources/AddEditResource.vue";
import ModalVue from "../Resources/Modal.vue";

/*
  Router
*/
const route = useRoute();
const router = useRouter();

/*
  store
*/
const storeResources = useResourcesStore();

/*
  resource
*/
const filteredResource = storeResources.getEditResource(route.params.id);

const newResource = ref({
  id: route.params.id,
  title: filteredResource[0].title,
  content: filteredResource[0].content,
  link: filteredResource[0].link,
});

/*
  Modal
*/
const modals = reactive({
  statusModal: false,
});

/*
  Cancel edit
*/
const acceptEdit = () => {
  storeResources.updateResource(newResource.value, route.params.id);
  router.push({ path: "/" });
};

const cancelEdit = () => {
  if (
    newResource.value.title !== filteredResource[0].title ||
    newResource.value.content !== filteredResource[0].content ||
    newResource.value.link !== filteredResource[0].link
  ) {
    return (modals.statusModal = true);
  }
  router.push({ path: "/" });
};
</script>
