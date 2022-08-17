<template>
  <div class="flex">
    <div
      class="bg-dark-800 icon flex items-center justify-center rounded-l-lg px-3"
    >
      <IconSearch class="text-lg text-gray-700" />
    </div>
    <input
      :disabled="loading || error"
      placeholder="Search blog entries"
      class="bg-dark-800"
      v-model="text"
      @input="$emit('update:text', text)"
    />
    <div
      class="bg-dark-800 icon flex items-center justify-center rounded-r-lg px-3"
    >
      <IconClear
        @click="clearSearch"
        class="text-xl ripple cursor-pointer rounded-full"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import IconSearch from "~icons/material-symbols/search";
import IconClear from "~icons/ic/round-clear";

defineProps({
  text: {
    type: String
  },
  loading: {
    type: Boolean
  },
  error: {
    type: Boolean
  }
});

const emit = defineEmits(["clear", "update:text"]);

const clearSearch = () => {
  emit("update:text", null);
};
</script>

<style scoped>
input {
  height: 50px;
  -webkit-tap-highlight-color: transparent;
  line-height: 48px;
  appearance: none;
  resize: none;
  box-sizing: border-box;
  font-size: 18px;
  color: rgb(193, 194, 197);
  text-align: left;
  min-height: 50px;
  outline: none;
  width: calc(100% - 100px);
}

.icon {
  height: 50px;
  width: 50px;
}

.tag-search-btn {
  height: 50px;
  width: 50px;
}
</style>
