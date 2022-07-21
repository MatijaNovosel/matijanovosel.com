<template>
  <canvas ref="matter" id="matter" />
  <q-page class="row justify-center items-center text-center" ref="page">
    <div class="col" style="z-index: 2">
      <p class="text-h5">👋 Hi, I'm</p>
      <p class="text-h2 text-bold">Matija Novosel</p>
      <p class="text-h6 text-weight-light text-grey-5">Fullstack developer</p>
    </div>
    <span class="footer-text" style="z-index: 2"> © Matija Novosel </span>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, nextTick, onBeforeUnmount, onMounted, ref, watch } from "vue";
import { Engine, Render, Bodies, Composite, Runner } from "matter-js";
import { randInt } from "src/utils/helpers";
import { useElementSize } from "@vueuse/core";

export default defineComponent({
  name: "Home",
  setup() {
    const engine = Engine.create();
    const runner = Runner.create();

    const matter = ref<HTMLCanvasElement>();
    const page = ref<HTMLElement | null>(null);

    let render: Render;
    let intervalId: ReturnType<typeof setTimeout> | null = null;

    const heightOffset = 30;
    const { width, height } = useElementSize(page);

    watch([width, height], async () => {
      await nextTick(() => {
        if (render) {
          render.bounds.max.x = width.value;
          render.bounds.max.y = height.value - heightOffset;
          render.options.width = width.value;
          render.options.height = height.value - heightOffset;
          render.canvas.width = width.value;
          render.canvas.height = height.value - heightOffset;
        }
      });
    });

    onMounted(() => {
      render = Render.create({
        canvas: matter.value,
        engine,
        options: {
          wireframes: false,
          background: "black",
          width: width.value,
          height: height.value - heightOffset
        }
      });

      Render.run(render);
      Runner.run(runner, engine);

      intervalId = setInterval(() => {
        const obj = Bodies.circle(randInt(0, width.value), 120, 20);
        Composite.add(engine.world, obj);
        setTimeout(() => {
          Composite.remove(engine.world, obj);
        }, 700);
      }, 200);
    });

    onBeforeUnmount(() => {
      clearTimeout(intervalId || -1);
      Render.stop(render);
    });

    return {
      matter,
      page
    };
  }
});
</script>

<style>
.footer-text {
  position: absolute;
  bottom: 35px;
  left: 0px;
}

canvas {
  position: absolute;
  left: 0;
  right: 0;
  z-index: 0;
  margin-left: auto;
  margin-right: auto;
}
</style>
