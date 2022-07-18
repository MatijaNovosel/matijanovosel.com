<template>
  <q-page class="row items-center justify-evenly">
    <div
      class="cursor-grab q-pa-sm move-box rounded-borders text-center text-white"
      ref="pukeko"
      :style="pukekoStyle"
      style="touch-action: none; position: fixed"
      :class="darkMode ? 'bg-orange' : 'bg-primary'"
    >
      <span class="q-pb-sm">
        {{ pukekoText }}
      </span>
      <img width="200" height="200" src="/pukeko.png" class="rounded-borders" />
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, inject, ref, computed, watch } from "vue";
import { RemovableRef, useDraggable } from "@vueuse/core";

export default defineComponent({
  name: "PageIndex",
  setup() {
    const pukeko = ref<HTMLElement | null>(null);
    const darkMode = inject<RemovableRef<boolean>>("dark-mode");
    const pukekoMoved = inject<RemovableRef<boolean>>("pukeko-moved");

    const initialX = 30;
    const initialY = 70;

    const {
      x,
      y,
      style: pukekoStyle
    } = useDraggable(pukeko, {
      initialValue: { x: initialX, y: initialY },
      preventDefault: true
    });

    watch([x, y], () => {
      if (pukekoMoved && !pukekoMoved.value) {
        pukekoMoved.value = true;
      }
    });

    return {
      pukekoStyle,
      pukeko,
      darkMode,
      pukekoMoved,
      pukekoText: computed(() => {
        return pukekoMoved && pukekoMoved.value ? "Why did you move me 😭" : "Move me around 😳";
      })
    };
  }
});
</script>

<style lang="scss">
.move-box {
  display: flex;
  flex-direction: column;
}
</style>
