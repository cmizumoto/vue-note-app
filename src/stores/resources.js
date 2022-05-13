import { defineStore } from "pinia";
import { v4 as uuidv4 } from "uuid";

export const useResourcesStore = defineStore("storeResources", {
  state: () => {
    return {
      resources: [
        {
          id: "id1",
          title: "title 1",
          content: "content 1 asd asd asd asd asd asd asd ",
          link: "https://www.youtube.com/watch?v=ClKtgDBEwC4",
        },
        {
          id: "id2",
          title: "title 2",
          content: "content 2 qwe qe qwe qwe qwe qwe qwe ",
          link: "https://www.google.com/",
        },
        {
          id: "id3",
          title: "title 3",
          content: "content 3 zxc zxc zxc zxc zxc zxc zxc  ",
          link: "https://www.google.com/",
        },
      ],
    };
  },
  actions: {
    deleteResource(resId) {
      this.resources = this.resources.filter((resource) => {
        return resource.id !== resId;
      });
    },
    addResource(resource) {
      const id = uuidv4();

      let newRes = {
        id,
        title: resource.title,
        content: resource.content,
        link: resource.link,
      };

      this.resources.unshift(newRes);
    },
    updateResource(resource, id) {
      let index = this.resources.findIndex((item) => {
        return item.id === id;
      });
      this.resources[index] = resource;
    },
  },
  getters: {
    getEditResource(state) {
      return (id) => {
        return state.resources.filter((resource) => {
          return resource.id === id;
        });
      };
    },
  },
});
