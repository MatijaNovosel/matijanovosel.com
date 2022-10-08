<template>
  <div class="w-full h-full flex justify-center items-center">
    <canvas ref="matter" class="z-1" />
    <div
      class="z-2 flex flex-col items-center justify-center user-select-none mx-auto text-center"
    >
      <transition name="bounce" appear>
        <img
          v-if="murderComplete"
          class="p-2 bg-white rounded-lg"
          width="200"
          height="200"
          src="/qr.svg"
        />
        <div v-else-if="emojisMurdered === 0">
          <p class="text-center text-lg md:text-2xl text-gray-300">
            <span class="wave text-4xl mr-3">👋</span>
            Hi, I'm
          </p>
          <h2 class="text-3xl md:text-6xl font-bold my-4">Matija Novosel</h2>
          <span class="text-gray-400">A fullstack developer</span>
        </div>
        <div v-else>
          <p class="text-center text-lg md:text-2xl text-gray-300">
            You have murdered
          </p>
          <h2 class="text-3xl md:text-6xl font-bold my-4 text-green-vue">
            {{ emojisMurdered }} {{ `emoji${emojisMurdered > 1 ? "s" : ""}` }}
          </h2>
          <span class="text-gray-400">
            {{ emojiMurderStatus }}
          </span>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, Ref, ref, watch } from "vue";
import { createEmojiImage, randInt, skullEmojiUrl } from "../utils/helpers";
import Matter from "matter-js";
import JSConfetti from "js-confetti";

let engine = null;
let runner = null;
let render = null;
let mouse = null;
let mouseConstraint = null;

const matter = ref<HTMLCanvasElement>();
let emojiCreateInterval: ReturnType<typeof setTimeout> | null = null;

const emojisMurdered = ref(0);
const emojiMurderStatus = ref("");
const murderComplete = ref(false);

const OFFSET = 30;
const EMOJI_MURDER_LIMIT = 40;

const pageDimensions = inject<{
  width: Ref<number>;
  height: Ref<number>;
}>("pageDimensions");

onMounted(() => {
  engine = Matter.Engine.create();
  runner = Matter.Runner.create();

  render = Matter.Render.create({
    canvas: matter.value,
    engine,
    options: {
      wireframes: false,
      background: "black",
      width: pageDimensions.width.value,
      height: pageDimensions.height.value - OFFSET
    }
  });

  Matter.Render.run(render);
  Matter.Runner.run(runner, engine);

  const constraint: any = {
    render: {
      visible: false
    }
  };

  mouse = Matter.Mouse.create(matter.value);
  mouseConstraint = Matter.MouseConstraint.create(engine, {
    mouse,
    constraint: { ...constraint }
  });

  Matter.Composite.add(engine.world, mouseConstraint);

  Matter.Events.on(runner, "tick", () => {
    if (
      mouseConstraint.body &&
      emojisMurdered.value != EMOJI_MURDER_LIMIT &&
      mouseConstraint.body.render.sprite.texture !== skullEmojiUrl
    ) {
      mouseConstraint.body.render.sprite.texture = skullEmojiUrl;
      emojisMurdered.value++;
    }
  });

  emojiCreateInterval = setInterval(() => {
    const url = createEmojiImage();

    const obj = Matter.Bodies.circle(
      randInt(OFFSET, pageDimensions.width.value - OFFSET),
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

    Matter.Composite.add(engine.world, obj);

    setTimeout(() => {
      Matter.Composite.remove(engine.world, obj);
    }, 8000);
  }, 200);
});

onBeforeUnmount(() => {
  clearTimeout(emojiCreateInterval || -1);
  Matter.Composite.remove(engine.world, mouseConstraint);
  engine.world.bodies.forEach((body) => {
    Matter.Composite.remove(engine.world, body);
  });
  Matter.Render.stop(render);
});

watch([pageDimensions.width, pageDimensions.height], async () => {
  const width = pageDimensions.width;
  const height = pageDimensions.height;
  await nextTick(() => {
    if (render) {
      render.bounds.max.x = width.value;
      render.bounds.max.y = height.value - OFFSET;
      render.options.width = width.value;
      render.options.height = height.value - OFFSET;
      render.canvas.width = width.value;
      render.canvas.height = height.value - OFFSET;
    }
  });
});

watch(
  () => emojisMurdered.value,
  (val) => {
    if (val >= 0 && val <= EMOJI_MURDER_LIMIT / 2 - 1) {
      emojiMurderStatus.value = "... keep going";
    } else if (
      val >= EMOJI_MURDER_LIMIT / 2 + 1 &&
      val <= EMOJI_MURDER_LIMIT - 1
    ) {
      emojiMurderStatus.value = "Just a little bit more ...";
    } else if (val === EMOJI_MURDER_LIMIT) {
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti();
      emojiMurderStatus.value = "Well done. Are you ready for your reward?";
      setTimeout(() => {
        murderComplete.value = true;
      }, 4000);
    }
  }
);

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
