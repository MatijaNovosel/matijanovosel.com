<template>
  <div class="flex gap-3">
    <div
      class="pagination-element text-5xl border-2 border-gray-500"
      :class="{
        'bg-dark-800 cursor-pointer': page != 1,
        'bg-gray-500 text-black': page == 1
      }"
      @click="traverse(true)"
    >
      &#8249;
    </div>
    <div
      @click="setPage(element)"
      class="pagination-element cursor-pointer font-bold text-3xl border-2"
      :class="{
        'bg-white text-black': page === element
      }"
      v-for="(element, i) in elements"
      :key="i"
    >
      {{ element }}
    </div>
    <div
      class="pagination-element text-5xl border-2 border-gray-500"
      :class="{
        'bg-dark-800 cursor-pointer': page != numberOfPages,
        'bg-gray-500 text-black': page == numberOfPages
      }"
      @click="traverse()"
    >
      &#8250;
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  numberOfPages: {
    type: Number,
    required: true
  },
  modelValue: {
    type: Number,
    required: true
  }
});

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
  user-select: none;
  transition: background 0.8s;
}
</style>
