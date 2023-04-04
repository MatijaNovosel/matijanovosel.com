<template>
  <div class="w-full h-full flex-center">
    <canvas ref="matterCanvas" />
    <div
      class="flex flex-col items-center justify-center user-select-none mx-auto text-center z-1"
    >
      <transition name="bounce" appear>
        <img
          v-if="murderComplete"
          class="p-2 bg-white rounded-lg"
          width="200"
          height="200"
          src="/qr.svg"
        />
        <div v-else-if="emojisMurdered === 0" class="bounce">
          <p class="text-center text-4xl text-gray-500">Hi, I'm</p>
          <h2 class="text-7xl md:text-9xl">Matija Novosel</h2>
          <p class="text-3xl">Sometimes I make stuff</p>
        </div>
        <div v-else>
          <p class="text-center text-4xl text-gray-500">You have murdered</p>
          <h2 class="text-7xl md:text-9xl">
            {{ emojisMurdered }} {{ `emoji${emojisMurdered > 1 ? "s" : ""}` }}
          </h2>
          <p class="text-2xl">
            {{ emojiMurderStatus }}
          </p>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useWindowSize } from "@vueuse/core";
import JSConfetti from "js-confetti";
import Matter from "matter-js";
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from "vue";
import {
  EMOJI_CLEANUP_INTERVAL,
  EMOJI_INACTIVITY_INTERVAL,
  EMOJI_MURDER_LIMIT,
  EMOJI_SPAWN_INTERVAL,
  REWARD_TIMEOUT,
  SKULL_EMOJI_URL
} from "~/utils/constants";
import { createCanvasEmoji } from "~/utils/helpers";

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

const { width, height } = useWindowSize();

onMounted(() => {
  engine = Matter.Engine.create();
  runner = Matter.Runner.create();
  render = Matter.Render.create({
    canvas: matterCanvas.value,
    engine,
    options: {
      wireframes: false,
      background: "none",
      width: width.value,
      height: height.value
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
    const obj = createCanvasEmoji(width.value);
    Matter.Composite.add(engine.world, obj);
    setTimeout(
      () => Matter.Composite.remove(engine.world, obj),
      EMOJI_CLEANUP_INTERVAL
    );
  }, EMOJI_SPAWN_INTERVAL);

  inactivityInterval = setInterval(() => {
    if (inactive.value && !murderComplete.value) emojisMurdered.value = 0;
    inactive.value = true;
  }, EMOJI_INACTIVITY_INTERVAL);
});

onBeforeUnmount(() => {
  clearTimeout(emojiCreateInterval || -1);
  clearTimeout(inactivityInterval || -1);
  Matter.Composite.remove(engine.world, mouseConstraint);
  engine.world.bodies.forEach((body) =>
    Matter.Composite.remove(engine.world, body)
  );
  Matter.Render.stop(render);
});

watch([width, height], async (val) => {
  const [width, height] = val;
  await nextTick(() => {
    if (render) {
      render.bounds.max.x = width;
      render.bounds.max.y = height;
      render.options.width = width;
      render.options.height = height;
      render.canvas.width = width;
      render.canvas.height = height;
    }
  });
});

watch(emojisMurdered, (val) => {
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
    setTimeout(() => (murderComplete.value = true), REWARD_TIMEOUT);
  }
});

const { setMeta } = useMetadata();
setMeta("Matija Novosel");
</script>
