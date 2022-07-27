<template>
  <q-page class="row justify-center items-center text-center">
    <p>Testing</p>
    <div
      class="cursor-grab q-pa-sm move-box rounded-borders text-center text-white bg-orange"
      ref="pukeko"
      :style="pukekoStyle"
      style="touch-action: none; position: fixed"
    >
      <span class="q-pb-sm">
        {{ pukekoText }}
      </span>
      <img width="200" height="200" src="/pukeko.jpg" class="rounded-borders" />
    </div>
  </q-page>
</template>

<script lang="ts" setup>
import { inject, ref, computed, watch } from "vue";
import { RemovableRef, useDraggable } from "@vueuse/core";

const pukeko = ref<HTMLElement | null>(null);
const pukekoMoved = inject<RemovableRef<boolean>>("pukeko-moved");

const initialX = 20;
const initialY = 70;

const {
  x,
  y,
  style: pukekoStyle
} = useDraggable(pukeko, {
  initialValue: { x: initialX, y: initialY },
  preventDefault: true
});

const pukekoText = computed(() => {
  return pukekoMoved && pukekoMoved.value ? "Why did you move me 😭" : "Move me around 😳";
});

watch([x, y], () => {
  if (pukekoMoved && !pukekoMoved.value) {
    pukekoMoved.value = true;
  }
});
</script>

<style lang="scss">
.move-box {
  display: flex;
  flex-direction: column;
}
</style>
