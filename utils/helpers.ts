import { EMOJI_LEN } from "./constants";
import EMOJIS from "./emojis";

export const randInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getAge = (birthDate: Date) =>
  Math.floor((new Date().getTime() - birthDate.getTime()) / 3.15576e10);

export const createEmojiImage = (): string => {
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
    ctx.fillText(EMOJIS[randInt(0, EMOJI_LEN)], 75, 75);
    url = drawing.toDataURL("image/png");
  }

  drawing.remove();

  return url;
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
