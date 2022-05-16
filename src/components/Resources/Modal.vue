<template>
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-card" ref="target">
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
        <button v-else class="button is-warning" @click.prevent="confirmButton">Confirm</button>
      </footer>
    </div>
  </div>
</template>

<script setup>
/*
  Imports
*/
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import { onClickOutside } from "@vueuse/core";
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
  Router
*/
const router = useRouter();

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

/*
  Modal Close
*/
const target = ref(null);
onClickOutside(target, (event) => closeModal());

/*
  Confirm changes
*/
const confirmButton = () => {
  closeModal();

  router.push({ path: "/" });
};

/*
  Keyboard control
*/
const handleKeyboard = (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
};

onMounted(() => {
  document.addEventListener("keyup", handleKeyboard);
});

onUnmounted(() => {
  document.removeEventListener("keyup", handleKeyboard);
});
</script>
