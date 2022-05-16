<template>
  <section class="section mx-auto">
    <transition-group tag="ul" name="resource-list" mode="out-in">
      <li class="card mb-5" v-for="resource in storeResources.resources" :key="resource.id">
        <header class="card-header">
          <p class="card-header-title">{{ resource.title }}</p>
          <div class="is-justify-content-end is-align-self-center">
            <router-link
              :to="`/edit/${resource.id}`"
              resource="resource"
              class="button is-white mr-3"
              href="#"
              title="Edit Resource"
            >
              <span class="icon"><i class="fas fa-edit"></i></span>
            </router-link>
            <a
              title="Delete Resource"
              class="button is-white mr-3"
              href="#"
              @click.prevent="modalDetails(true, resource.id)"
              ><span class="icon"><i class="fas fa-trash"></i></span
            ></a>
          </div>
        </header>
        <div class="card-content">
          <div class="content">
            {{ resource.content }}
          </div>
          <div class="content">
            <a :href="resource.link" target="_blank">Link to resource</a>
          </div>
        </div>
      </li>
    </transition-group>

    <transition name="modal">
      <modal-vue
        v-if="modals.statusModal"
        v-model="modals.statusModal"
        modalAction="delete"
        title="Delete Resource?"
        :resourceId="modals.modalId"
      >
      </modal-vue>
    </transition>
  </section>
</template>

<script setup>
/*
  IMPORTS
*/
import { reactive } from "vue";
import { useResourcesStore } from "@/stores/resources";
import ModalVue from "@/components/Resources/Modal.vue";

/*
  Store
*/
const storeResources = useResourcesStore();

/*
  Modal
*/
const modals = reactive({
  statusModal: false,
  modalId: "",
});

const modalDetails = (condition, id) => {
  modals.statusModal = condition;
  modals.modalId = id;
};
</script>

<style>
.section {
  max-width: 40rem;
}

.card {
  list-style: none;
}

.modal-enter-active,
.modal-leave-active,
.resource-list-move,
.resource-list-enter-active,
.resource-list-leave-active {
  transition: all 0.2s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.resource-list-active {
  position: absolute;
}

.resource-list-enter-from {
  opacity: 0;
  transform: translateX(-4rem);
}

.resource-list-leave-to {
  opacity: 0;
  transform: translateX(4rem);
}
</style>
