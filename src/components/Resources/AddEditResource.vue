<template>
  <div class="container">
    <form class="form-control my-6 mx-auto">
      <div class="field">
        <label class="label">Title</label>
        <div class="control">
          <input class="input" type="text" placeholder="Title" v-model="modelValue.title" />
        </div>
      </div>

      <div class="field">
        <label class="label">Description</label>
        <div class="control">
          <textarea
            class="textarea"
            placeholder="Description"
            v-model="modelValue.content"
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
            v-model="modelValue.link"
          />
        </div>
      </div>

      <div class="field is-grouped">
        <slot name="buttons"></slot>
      </div>
    </form>
  </div>
</template>

<script setup>
/*
    Props
*/
const props = defineProps({
  modelValue: {
    type: Object,
    required: true,
  },
});
</script>
