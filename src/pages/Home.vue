<template>
  <canvas ref="matter" id="matter" />
  <q-page class="row justify-center items-center text-center" ref="page">
    <div class="col center" style="z-index: 2">
      <p class="text-h5"><span class="wave">👋</span> Hi, I'm</p>
      <p class="text-h2 text-bold">Matija Novosel</p>
      <p class="text-h6 text-weight-light text-grey-5">a Fullstack developer</p>
    </div>
    <span class="footer-text-left" style="z-index: 2"> © Matija Novosel </span>
    <a href="https://github.com/MatijaNovosel/cv" class="footer-text-right text-white" style="z-index: 2">
      Source
    </a>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, nextTick, onBeforeUnmount, onMounted, ref, watch } from "vue";
import { Engine, Render, Bodies, Composite, Runner, MouseConstraint, Mouse, Events } from "matter-js";
import { randInt } from "src/utils/helpers";
import { useElementSize } from "@vueuse/core";
import emojis from "src/utils/emojis";

export default defineComponent({
  name: "Home",
  setup() {
    const engine = Engine.create();
    const runner = Runner.create();
    let mouseConstraint: MouseConstraint | null = null;
    let canvasMouse: Mouse | null = null;

    const matter = ref<HTMLCanvasElement>();
    const page = ref<HTMLElement | null>(null);

    let render: Render;
    let intervalId: ReturnType<typeof setTimeout> | null = null;

    const offset = 30;
    const { width, height } = useElementSize(page);

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

    watch([width, height], async () => {
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
      render = Render.create({
        canvas: matter.value,
        engine,
        options: {
          wireframes: false,
          background: "black",
          width: width.value,
          height: height.value - offset
        }
      });

      Render.run(render);
      Runner.run(runner, engine);

      canvasMouse = Mouse.create(matter.value as HTMLElement);
      canvasMouse.pixelRatio = 2;

      mouseConstraint = MouseConstraint.create(engine, {
        mouse: canvasMouse
      });

      Composite.add(engine.world, mouseConstraint);

      Events.on(mouseConstraint, "mousedown", (event) => {
        console.log(event);
      });

      intervalId = setInterval(() => {
        const url = createEmojiImage();
        const obj = Bodies.circle(randInt(offset, width.value - offset), 60, 20, {
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
        });

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

    return {
      matter,
      page
    };
  }
});
</script>

<style>
.footer-text-left {
  position: absolute;
  bottom: 35px;
  left: 0px;
}

.footer-text-right {
  position: absolute;
  bottom: 35px;
  right: 0px;
}

canvas {
  position: absolute;
  left: 0;
  right: 0;
  z-index: 0;
  margin-left: auto;
  margin-right: auto;
}

.center {
  margin-top: -65px;
}

.wave {
  -webkit-animation-name: wave-animation;
  animation-name: wave-animation;
  -webkit-animation-duration: 2.5s;
  animation-duration: 2.5s;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
  display: inline-block;
}

@-webkit-keyframes wave-animation {
  0% {
    transform: rotate(0);
  }
  10% {
    transform: rotate(14deg);
  }
  20% {
    transform: rotate(-8deg);
  }
  30% {
    transform: rotate(14deg);
  }
  40% {
    transform: rotate(-4deg);
  }
  50% {
    transform: rotate(10deg);
  }
  60% {
    transform: rotate(0);
  }
  to {
    transform: rotate(0);
  }
}

@keyframes wave-animation {
  0% {
    transform: rotate(0);
  }
  10% {
    transform: rotate(14deg);
  }
  20% {
    transform: rotate(-8deg);
  }
  30% {
    transform: rotate(14deg);
  }
  40% {
    transform: rotate(-4deg);
  }
  50% {
    transform: rotate(10deg);
  }
  60% {
    transform: rotate(0);
  }
  to {
    transform: rotate(0);
  }
}
</style>
