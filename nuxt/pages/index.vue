<template>
  <div class="contents">
    <canvas ref="matter" id="matter" class="z-1" />
    <div
      class="z-2 p-16 max-w-screen-md w-full flex flex-col items-center justify-center rounded-3xl shadow-inset-white shadow-none"
      ref="page"
    >
      <p
        class="inline-flex items-center text-center text-lg md:text-2xl text-gray-300 tracking-wide"
      >
        <span class="wave text-4xl mr-3">👋</span>
        Hi I'm
      </p>
      <h2 class="text-6xl font-bold my-4 tracking-tight font-space">
        Matija Novosel
      </h2>
      <h5 class="text-gray-400">A fullstack developer</h5>
    </div>
  </div>
</template>

<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, Ref, ref, watch } from "vue";
import { randInt } from "../utils/helpers";
import emojis from "../utils/emojis";
import { Engine, Runner, Render, Composite, Bodies } from "matter-js";

let engine = null;
let runner = null;

const matter = ref<HTMLCanvasElement>();
const page = ref<HTMLElement | null>(null);

let render: Render;
let intervalId: ReturnType<typeof setTimeout> | null = null;

const offset = 30;
const pageDimensions = inject<{
  width: Ref<number>;
  height: Ref<number>;
}>("pageDimensions");

const createEmojiImage = (): string => {
  const drawing = document.createElement("canvas");

  drawing.width = 150;
  drawing.height = 150;

  const ctx = drawing.getContext("2d");
  let url = "";

  if (ctx) {
    ctx.beginPath();
    ctx.arc(75, 75, 15, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fill();
    ctx.font = "32pt sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(emojis[randInt(0, emojis.length - 1)], 75, 85);

    url = drawing.toDataURL("image/png");
  }

  drawing.remove();

  return url;
};

watch([pageDimensions.width, pageDimensions.height], async () => {
  const width = pageDimensions.width;
  const height = pageDimensions.height;
  await nextTick(() => {
    if (render) {
      render.bounds.max.x = width.value;
      render.bounds.max.y = height.value - offset;
      render.options.width = width.value;
      render.options.height = height.value - offset;
      render.canvas.width = width.value;
      render.canvas.height = height.value - offset;
    }
  });
});

onMounted(() => {
  engine = Engine.create();
  runner = Runner.create();

  render = Render.create({
    canvas: matter.value,
    engine,
    options: {
      wireframes: false,
      background: "black",
      width: pageDimensions.width.value,
      height: pageDimensions.height.value - offset
    }
  });

  Render.run(render);
  Runner.run(runner, engine);

  intervalId = setInterval(() => {
    const url = createEmojiImage();

    const obj = Bodies.circle(
      randInt(offset, pageDimensions.width.value - offset),
      60,
      20,
      {
        frictionAir: 0.1,
        friction: 1,
        density: 0.6,
        angle: randInt(0, 360),
        render: {
          sprite: {
            texture: url,
            xScale: 1,
            yScale: 1
          }
        }
      }
    );

    Composite.add(engine.world, obj);

    setTimeout(() => {
      Composite.remove(engine.world, obj);
    }, 8000);
  }, 200);
});

onBeforeUnmount(() => {
  clearTimeout(intervalId || -1);
  engine.world.bodies.forEach((body) => {
    Composite.remove(engine.world, body);
  });
  Render.stop(render);
});

definePageMeta({
  pageTransition: {
    name: "fade",
    mode: "out-in"
  }
});

const { setMeta } = useMetadata();
setMeta("Matija Novosel");
</script>

<style>
canvas {
  position: absolute;
  left: 0;
  right: 0;
  z-index: 0;
  margin-left: auto;
  margin-right: auto;
}
</style>
