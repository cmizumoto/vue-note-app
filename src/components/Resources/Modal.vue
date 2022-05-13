<template>
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">{{ title }}</p>
        <button class="delete" aria-label="close" @click.prevent="closeModal"></button>
      </header>
      <footer class="modal-card-foot is-justify-content-flex-end">
        <button class="button" @click.prevent="closeModal">Cancel</button>
        <button
          v-if="modalAction === 'delete'"
          class="button is-danger"
          @click.prevent="deleteResourceHandler(resourceId)"
        >
          {{ capitalize(modalAction) }}
        </button>
        <router-link v-else class="button is-warning" @click.prevent to="/"> Discard </router-link>
      </footer>
    </div>
  </div>
</template>

<script setup>
/*
  Imports
*/
import { useResourcesStore } from "@/stores/resources";

/*
  Props
*/
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  resourceId: {
    type: String,
    required: true,
  },
  modalAction: {
    type: String,
    required: true,
  },
  title: {
    type: String,
  },
});

/*
  Emits
*/
const emit = defineEmits(["update:modelValue"]);

/*
    Close modal
*/
const closeModal = () => {
  emit("update:modelValue", false);
};

/*
  Capitalize for text
*/
const capitalize = (s) => s && s[0].toUpperCase() + s.slice(1);

/*
  Store and Actions
*/
const storeResources = useResourcesStore();

/*
  Delete Resource
*/
const deleteResourceHandler = (id) => {
  storeResources.deleteResource(id);
  closeModal();
};
</script>
