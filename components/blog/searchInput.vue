<template>
  <div class="flex">
    <div
      class="bg-dark-300 icon flex-center rounded-l-lg px-3 border-t-2 border-b-2 border-l-2"
    >
      <icon-search class="text-lg text-gray-200" />
    </div>
    <input
      :disabled="loading || error"
      placeholder="Search blog entries"
      class="bg-dark-300 border-t-2 border-b-2"
      :value="modelValue"
      @input="
        $emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
      type="search"
    />
    <div
      class="bg-dark-300 icon flex-center rounded-r-lg px-3 border-t-2 border-b-2 border-r-2"
    >
      <icon-clear
        @click="$emit('update:modelValue', '')"
        class="text-xl ripple cursor-pointer rounded-full"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import IconClear from "~icons/ic/round-clear";
import IconSearch from "~icons/material-symbols/search";

defineProps<{
  modelValue: string;
  loading: boolean;
  error: boolean;
}>();

defineEmits(["update:modelValue"]);
</script>

<style scoped>
input {
  height: 50px;
  -webkit-tap-highlight-color: transparent;
  font-size: 24px;
  color: rgb(193, 194, 197);
  outline: none;
  width: calc(100% - 100px);
}

.icon {
  height: 50px;
  width: 50px;
  -webkit-tap-highlight-color: transparent;
}

input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
  -webkit-appearance: none;
  appearance: none;
}
</style>
