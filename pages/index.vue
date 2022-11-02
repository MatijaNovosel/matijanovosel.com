<template>
  <div class="w-full h-full flex-center">
    <canvas ref="matterCanvas" class="z-1" />
    <div
      class="z-2 flex flex-col items-center justify-center user-select-none mx-auto text-center"
    >
      <transition name="bounce" appear>
        <img
          v-if="murderComplete"
          class="p-2 bg-white rounded-lg"
          width="200"
          height="200"
          src="https://jizipjmjieshqxsqkvgw.supabase.co/storage/v1/object/public/bucket/qr.svg"
        />
        <div v-else-if="emojisMurdered === 0">
          <p class="text-center text-lg md:text-2xl text-gray-300">
            <span class="wave text-4xl mr-3">👋</span>
            Hi, I'm
          </p>
          <h2 class="text-3xl md:text-7xl font-bold my-4">Matija Novosel</h2>
          <span class="text-gray-400">A fullstack developer</span>
        </div>
        <div v-else>
          <p class="text-center text-lg md:text-2xl text-gray-300">
            You have murdered
          </p>
          <h2 class="text-3xl md:text-7xl font-bold my-4 text-green-vue">
            {{ emojisMurdered }} {{ `emoji${emojisMurdered > 1 ? "s" : ""}` }}
          </h2>
          <span>
            {{ emojiMurderStatus }}
          </span>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, Ref, ref, watch } from "vue";
import { createEmojiImage, randInt } from "~/utils/helpers";
import {
  REWARD_TIMEOUT,
  SKULL_EMOJI_URL,
  EMOJI_CLEANUP_INTERVAL,
  EMOJI_INACTIVITY_INTERVAL,
  EMOJI_MURDER_LIMIT,
  EMOJI_SPAWN_INTERVAL,
  CANVAS_OFFSET
} from "~/utils/constants";
import Matter from "matter-js";
import JSConfetti from "js-confetti";

let engine = null;
let runner = null;
let render = null;
let mouse = null;
let mouseConstraint = null;
let inactivityInterval = null;
let emojiCreateInterval = null;

const matterCanvas = ref<HTMLCanvasElement>();
const emojisMurdered = ref(0);
const emojiMurderStatus = ref("");
const murderComplete = ref(false);
const inactive = ref(false);

const pageDimensions = inject<{
  width: Ref<number>;
  height: Ref<number>;
}>("pageDimensions");

onMounted(() => {
  engine = Matter.Engine.create();
  runner = Matter.Runner.create();

  render = Matter.Render.create({
    canvas: matterCanvas.value,
    engine,
    options: {
      wireframes: false,
      background: "black",
      width: pageDimensions.width.value,
      height: pageDimensions.height.value - CANVAS_OFFSET
    }
  });

  Matter.Render.run(render);
  Matter.Runner.run(runner, engine);

  mouse = Matter.Mouse.create(matterCanvas.value);
  mouseConstraint = Matter.MouseConstraint.create(engine, {
    mouse,
    constraint: {
      render: {
        visible: false
      }
    } as any
  });

  Matter.Composite.add(engine.world, mouseConstraint);

  Matter.Events.on(runner, "tick", () => {
    if (
      mouseConstraint.body &&
      emojisMurdered.value != EMOJI_MURDER_LIMIT &&
      mouseConstraint.body.render.sprite.texture !== SKULL_EMOJI_URL
    ) {
      mouseConstraint.body.render.sprite.texture = SKULL_EMOJI_URL;
      emojisMurdered.value++;
    }
  });

  emojiCreateInterval = setInterval(() => {
    const url = createEmojiImage();

    const obj = Matter.Bodies.circle(
      randInt(CANVAS_OFFSET, pageDimensions.width.value - CANVAS_OFFSET),
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
    }, EMOJI_CLEANUP_INTERVAL);
  }, EMOJI_SPAWN_INTERVAL);

  inactivityInterval = setInterval(() => {
    if (inactive.value && !murderComplete.value) {
      emojisMurdered.value = 0;
    }
    inactive.value = true;
  }, EMOJI_INACTIVITY_INTERVAL);
});

onBeforeUnmount(() => {
  clearTimeout(emojiCreateInterval || -1);
  clearTimeout(inactivityInterval || -1);
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
      render.bounds.max.y = height.value - CANVAS_OFFSET;
      render.options.width = width.value;
      render.options.height = height.value - CANVAS_OFFSET;
      render.canvas.width = width.value;
      render.canvas.height = height.value - CANVAS_OFFSET;
    }
  });
});

watch(
  () => emojisMurdered.value,
  (val) => {
    inactive.value = false;
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
      clearTimeout(inactivityInterval || -1);
      setTimeout(() => {
        murderComplete.value = true;
      }, REWARD_TIMEOUT);
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
