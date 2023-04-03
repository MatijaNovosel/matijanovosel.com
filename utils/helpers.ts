import { dateDiffReadable, getMonth, randInt, sample } from "matija-utils";
import Matter from "matter-js";
import { CANVAS_OFFSET, emojis } from "./constants";

export const createCanvasEmoji = (pageWidth: number) => {
  return Matter.Bodies.circle(
    randInt(CANVAS_OFFSET, pageWidth - CANVAS_OFFSET),
    60,
    20,
    {
      frictionAir: 0.1,
      friction: 1,
      density: 0.6,
      angle: randInt(0, 360),
      render: {
        sprite: {
          texture: `/emojis/${sample(emojis)}.png`,
          xScale: 1,
          yScale: 1
        }
      }
    }
  );
};

export const formatDuration = (from: Date, to: Date | null) => {
  return `${`${getMonth(from)} ${from.getFullYear()}`} - ${
    to ? `${getMonth(to)} ${to.getFullYear()}` : "Current"
  } (${dateDiffReadable(from, to || new Date())})`;
};
