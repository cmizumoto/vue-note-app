import { createRouter, createWebHistory } from "vue-router";
import ViewResource from "@/components/views/ViewResource.vue";
import ViewAddResource from "@/components/views/ViewAddResource.vue";
import ViewEditResource from "@/components/views/ViewEditResource.vue";

const routes = [
  {
    path: "/",
    name: "resources",
    component: ViewResource,
    alias: "/resources",
  },
  {
    path: "/addNew",
    name: "add-resource",
    component: ViewAddResource,
  },
  {
    path: "/edit/:id",
    name: "edit-resource",
    component: ViewEditResource,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
