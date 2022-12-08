import Matter from "matter-js";
import { CANVAS_OFFSET, EMOJI_LEN } from "./constants";
import EMOJIS from "./emojis";

export const randInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const createEmojiImage = (): string => {
  const drawing = document.createElement("canvas");

  drawing.width = 150;
  drawing.height = 150;

  const ctx = drawing.getContext("2d");
  let url = "";

  if (ctx) {
    ctx.beginPath();
    ctx.arc(75, 75, 15, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.closePath();
    ctx.font = "32pt sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(EMOJIS[randInt(0, EMOJI_LEN)], 75, 75);
    url = drawing.toDataURL("image/png");
  }

  drawing.remove();

  return url;
};

export const createCanvasEmoji = (pageWidth: number, texture: string) => {
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
          texture,
          xScale: 1,
          yScale: 1
        }
      }
    }
  );
};

export const monthDiff = (dateFrom: Date, dateTo: Date) => {
  return (
    dateTo.getMonth() -
    dateFrom.getMonth() +
    12 * (dateTo.getFullYear() - dateFrom.getFullYear())
  );
};

export const dateDiffReadable = (from: Date, to: Date): string => {
  const monthDifference = monthDiff(from, to);
  const years = Math.floor(monthDifference / 12);
  const months = monthDifference % 12;

  return `${years > 0 ? `${years} year${years > 1 ? "s" : ""}` : ""}${
    months > 0
      ? `${years > 0 ? " " : ""}${months} month${months > 1 ? "s" : ""}`
      : ""
  }`;
};

export const getMonth = (date: Date | null) => {
  if (date) return date.toLocaleString("en", { month: "long" });
  return new Date().toLocaleString("en", { month: "long" });
};

export const formatDuration = (from: Date, to: Date | null) => {
  return `${`${getMonth(from)} ${from.getFullYear()}`} - ${
    to ? `${getMonth(to)} ${to.getFullYear()}` : "Current"
  } (${dateDiffReadable(from, to || new Date())})`;
};
