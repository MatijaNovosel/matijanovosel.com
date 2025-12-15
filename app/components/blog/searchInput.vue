<template>
  <div class="flex">
    <div
      class="icon flex-center rounded-l-lg px-3 border-t-1 border-b-1 border-l-1"
    >
      <icon-search class="text-lg text-gray-500" />
    </div>
    <input
      :disabled="loading || error"
      placeholder="Search blog entries"
      class="border-t-1 border-b-1"
      :value="modelValue"
      @input="
        $emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
      type="search"
    />
    <div
      class="icon flex-center rounded-r-lg px-3 border-t-1 border-b-1 border-r-1"
    >
      <icon-clear
        @click="$emit('update:modelValue', '')"
        class="text-xl ripple cursor-pointer rounded-full text-gray-500"
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
  font-size: 16px;
  outline: none;
  width: calc(100% - 100px);
}

.icon {
  height: 50px;
  width: 50px;
}

input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
  -webkit-appearance: none;
  appearance: none;
}
</style>
