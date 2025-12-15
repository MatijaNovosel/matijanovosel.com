<template>
  <div class="flex gap-3">
    <div
      class="pagination-element text-xl border-1 border-gray-200"
      :class="{
        'text-gray-500': page == 1
      }"
      @click="traverse(true)"
    >
      <div class="flex-center">
        <IconChevronLeft />
      </div>
    </div>
    <div
      @click="setPage(element)"
      class="pagination-element cursor-pointer font-bold text-md border-1"
      :class="{
        'bg-gray-100 text-gray-500': page === element
      }"
      v-for="(element, i) in elements"
      :key="i"
    >
      {{ element }}
    </div>
    <div
      class="pagination-element text-xl border-1 border-gray-200"
      :class="{
        'text-gray-500': page == numberOfPages
      }"
      @click="traverse()"
    >
      <div class="flex-center">
        <IconChevronRight />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import IconChevronLeft from "~icons/mdi/chevronLeft";
import IconChevronRight from "~icons/mdi/chevronRight";

const props = defineProps<{
  numberOfPages: number;
  modelValue: number;
}>();

const emit = defineEmits(["update:modelValue"]);

const elements = computed(() =>
  [...new Array(props.numberOfPages)].map((_, i) => i + 1)
);

const page = ref(props.modelValue);

const setPage = (n: number) => {
  page.value = n;
  emit("update:modelValue", n);
};

const traverse = (left?: boolean) => {
  if (left) {
    if (page.value - 1 <= 0) return;
    setPage(page.value - 1);
    return;
  }
  if (page.value + 1 > props.numberOfPages) return;
  setPage(page.value + 1);
};

watch(
  () => props.modelValue,
  (val) => (page.value = val)
);
</script>

<style scoped>
.pagination-element {
  padding: 20px;
  width: 20px;
  height: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
